import { FC } from "react";
import { Item } from "../../types";
import "./ProductList.css";
import { formatCurrency } from "../../utils";
import { useCartContext } from "../../hooks";
import Button from "../Button/Button";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

interface ProductListProps {
  items: Item[];
}

const ProductList: FC<ProductListProps> = ({ items }) => {
  const { cart, addItem, deleteItem } = useCartContext();
  return (
    <div className="main_products">
      {items.map((item) => {
        const currentItem = cart.items.find((itm) => itm.id === item.id);
        return (
          <div key={item.id} className="products_box">
            <div className="products_quantity">{currentItem?.quantity}</div>
            <div className="products_name">{item.name}</div>
            <div className="products_price">{formatCurrency(item.price)}</div>
            <div className="picture_container">
              <img src={item.picture} alt="" className="picture" />
            </div>
            <div className="buttons">
              <Button
                onClick={() => addItem(item.id)}
                color="blue"
                icon={<MdAddShoppingCart />}
              />
              <Button
                onClick={() => deleteItem(item.id)}
                color={currentItem ? "red" : "disabled"}
                icon={<MdOutlineRemoveShoppingCart />}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
