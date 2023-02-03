import React, {ButtonHTMLAttributes} from "react";
import {IconName} from "types/utils.";
import {Icon} from "components";

interface IconButtonProps extends React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   iconName: IconName;
   color?: string;
   iconsize: string;
}

const IconButton: React.FC<IconButtonProps> = ({ iconName, iconsize, ...rest }) => {
   return (
      <button {...rest}>
         <Icon name={iconName} size={iconsize} />
      </button>
   );
};

export default IconButton;
