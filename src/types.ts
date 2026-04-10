export interface ItemMenu {
  uuidItemMenu: string;
  base64Image: string;
  descricaoAltImage: string;
  nome: string;
  descricao: string;
  categoria: string;
  descricaoCategoria: string;
};

export interface Categoria {
  valor: string;
  descricao: string;
};

export interface Item {
  uuidItemMenu: string;
  base64Image: string;
  descricaoAltImage: string;
  nome: string;
  descricao: string;
};

export interface ItemMenuDetalhes {
  categoria: string;
  descricaoCategoria: string;
  itens: Item[];
};

export interface FormDataCadastrar {
  nome: string;
  categoria: string;
  descricao: string;
  base64Image?: string;
  descricaoAltImage: string;
};
