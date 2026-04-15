import type { FormDataCadastrar } from "@types";
import { notifier } from "../notifier";

const apiUrl = import.meta.env.PUBLIC_API_URL;

export async function requester<T>(
  endpoint: string,
  method: string = "GET",
  body?: FormDataCadastrar,
): Promise<T | undefined> {
  const response = await fetch(`${apiUrl}${endpoint}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    notifier(errorData.message, "error");
    return;
  }

  return response.json();
}

export const getRequester = <T>(endpoint: string) => requester<T>(endpoint);

export const postRequester = <T>(endpoint: string, body: any) =>
  requester<T>(endpoint, "POST", body);

export const deleteRequester = <T>(endpoint: string, body: any) =>
  requester<T>(endpoint, "DELETE", body);
