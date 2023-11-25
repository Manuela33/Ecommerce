export type Cart = {
  items: Item[];
  total: number;
};

export type Item = {
  id: number;
  name: string;
  price: number;
  picture: string;
  quantity: number;
};
