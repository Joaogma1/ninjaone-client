import React, {ButtonHTMLAttributes} from "react";

interface Props extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   text?: string;
}

const Button: React.FC<Props> = ({ text, children, ...rest }) => {
   return (
      <button {...rest}>
         {children} {text}
      </button>
   );
};

export default Button;
