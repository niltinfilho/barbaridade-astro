import type { ItemMenuDetalhes } from "@types";

export async function renderItems(itemMenuDetalhesData: ItemMenuDetalhes[]) {
  const container = document.querySelector("#menu-itens-root");
  container!.innerHTML = "";

  itemMenuDetalhesData.forEach((itemMenuDetalhes: ItemMenuDetalhes) => {
    if (itemMenuDetalhes.itens.length > 0) {
      const section = document.createElement("div");
      section.classList.add("menu-itens-section");

      const h2 = document.createElement("h2");
      h2.classList.add("title-category-menu-itens");
      h2.textContent = itemMenuDetalhes.descricaoCategoria;
      section.appendChild(h2);

      const cardsDiv = document.createElement("div");
      cardsDiv.classList.add("cards");

      itemMenuDetalhes.itens.forEach((item) => {
        const article = document.createElement("article");
        article.classList.add("card");

        const img = document.createElement("img");
        img.classList.add("image-card-item-menu")
        img.src = item.base64Image;
        img.alt = item.descricaoAltImage;
        article.appendChild(img);

        const h3 = document.createElement("h3");
        h3.classList.add("title-card-item-menu")
        h3.textContent = item.nome;
        article.appendChild(h3);

        const p = document.createElement("p");
        p.classList.add("text-card-item-menu")
        p.textContent = item.descricao;
        article.appendChild(p);
        cardsDiv.appendChild(article);
      });
      section.appendChild(cardsDiv);
      container!.appendChild(section);
    }
  });
}
