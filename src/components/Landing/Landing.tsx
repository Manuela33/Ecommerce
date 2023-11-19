import { FC, useContext } from 'react';
import { Context } from '../../context';

const Landing: FC = () => {
  const context = useContext(Context);

  const carrito = context?.cart;

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
        <div>{carrito?.items.length}</div>
      </nav>
    </>
  );
};

export default Landing;
