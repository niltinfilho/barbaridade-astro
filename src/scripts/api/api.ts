import type { FormDataCadastrar } from "@types";
const apiUrl = import.meta.env.PUBLIC_API_URL;

export async function requester<T>(
  endpoint: string,
  method: string = "GET",
  body?: FormDataCadastrar,
): Promise<T> {
  const response = await fetch(`${apiUrl}${endpoint}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  // if (!response.ok) {
  //   const errorData = await response.json().catch(() => ({}));
  //   return;
  // }

  return response.json();
}
