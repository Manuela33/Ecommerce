import { FC } from "react";
import { Item } from "../../types";
import "./ProductList.css";
import { formatCurrency } from "../../utils";
import { useCartContext } from "../../hooks";

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
            <button onClick={() => addItem(item.id)}>add to cart</button>
            <button onClick={() => deleteItem(item.id)}>
              delete from cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
