import { FC, ReactNode } from "react";
import './Button.css';

interface ButtonProps {
  color: "blue" | "red" | "disabled";
  icon: ReactNode;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ color, icon, onClick }) => {
  return <button onClick={onClick} className={`button ${color}`}>{icon}</button>;
};

export default Button;
