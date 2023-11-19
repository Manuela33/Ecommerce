export type Cart = {
  items: Item[];
  total: number;
};

export type Item = {
  name: string;
  price: number;
};
