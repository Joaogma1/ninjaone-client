import React from "react";
import { IconName } from "types/utils.";
import { Icon } from "components";
import "./inputCustom.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   icon?: IconName;
}

const InputWithIcon: React.FC<InputProps> = ({ icon, onChange, value, width = "auto", height = "auto", placeholder, ...rest }) => {
   return (
      <div className={`${rest.className} row center bg_white b_darkopaque rounded h3}`} style={{ paddingLeft: 12 }} data-testid={`icon-container`}>
         {icon && <IconContainer name={icon} />}
         <input {...rest} className={`input-custom`} onChange={onChange} value={value} placeholder={placeholder} />
      </div>
   );
};

interface IconContainerProps {
   name: IconName;
}

const IconContainer: React.FC<IconContainerProps> = ({ name }) => {
   return (
      <div className="icon-container">
         <Icon size="1rem" name={name} color="var(--secondary65)" />
      </div>
   );
};

export default InputWithIcon;
