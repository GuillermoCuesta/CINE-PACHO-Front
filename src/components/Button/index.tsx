import { ReactElement } from "react";

type typeButton =
 
  | "bluePrimary"
  | "disabled"
  | "enabled"
   
interface PropsButton {
  buttonType?: typeButton; // Tipo de boton
  content: string; // Texto del botón
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  buttonType,
  content,
  className = "",
  type,
  onClick,
}: PropsButton): ReactElement => {


  if (buttonType === "bluePrimary") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-full px-5 py-3 bg-blue-001 text-white rounded-xl lg:text-lg font-bold  ${className}`}
      >
        {" "}
        {content}{" "}
      </button>
    );
  }

  if (buttonType === "disabled") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-full px-5 py-3 bg-gray-disabled rounded-xl text-xl font-bold text-blue-001 ${className}`}
      >
        {" "}
        {content}{" "}
      </button>
    );
  }
  if (buttonType === "enabled") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`w-full px-5 py-3 bg-yellow-004 rounded-xl text-xl font-bold text-blue-001 ${className}`}
      >
        {" "}
        {content}{" "}
      </button>
    );
  }
  return (
    <button type={type} onClick={onClick} className={` font-bold ${className}`}>
      {" "}
        {content}{" "}         {content}{" "}
    </button>
  );
};

export default Button;
