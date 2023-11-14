import { FC } from "react";

const Landing: FC = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
      </nav>
    </>
  );
};

export default Landing;
