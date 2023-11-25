import { FC } from "react";
import items from "../../database";
import ProductList from "../ProductList/ProductList";

const Landing: FC = () => {
  return (
    <>
      <ProductList items={items} />
    </>
  );
};

export default Landing;
