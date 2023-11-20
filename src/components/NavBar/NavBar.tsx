import { FC } from 'react'

interface NavBarProps {
  
}

const NavBar: FC<NavBarProps> = () => {
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
      </nav>
    </>
  );
}

export default NavBar;
