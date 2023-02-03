import React from "react";
import {IconName} from "types/utils.";
import * as Icons from "assets/icons";

interface IconProps {
   size: string;
   name: IconName;
   color?: string;
}

const Icon: React.FC<IconProps> = ({ size, color, name }) => {
   const IconComponent = Icons[name];

   if (!IconComponent) return null;
   return <IconComponent fontSize={size} width={size} height={size} fill={color} />;
};

export default Icon;
