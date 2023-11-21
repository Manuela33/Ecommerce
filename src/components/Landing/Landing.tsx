import { FC } from "react";
import ProductList from "../ProductList/ProductList";
import items from "../../database";

const Landing: FC = () => {
  return (
    <>
      <ProductList items={items} />
    </>
  );
};

export default Landing;
