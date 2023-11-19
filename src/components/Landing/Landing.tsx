import { FC } from 'react';
import { useCartContext } from '../../hooks';

const Landing: FC = () => {
  const { cart, addItem } = useCartContext();

  return (
    <>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <div>{cart.total}</div>
        <button onClick={addItem}></button>
      </nav>
    </>
  );
};

export default Landing;
