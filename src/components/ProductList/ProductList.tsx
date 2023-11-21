import { FC } from "react";
import { Item } from "../../types";
import "./ProductList.css";
import { formatCurrency } from "../../utils";

interface ProductListProps {
  items: Item[];
}

const ProductList: FC<ProductListProps> = ({ items }) => {
  return (
    <div className="main_products">
      {items.map((item) => (
        <div key={item.id} className="products_box">
          <div className="products_name">{item.name}</div>
          <div className="products_price">{formatCurrency(item.price)}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
