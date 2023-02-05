import React, {useEffect, useRef, useState} from "react";
import "./actionDropdown.css";
import {IconButton} from "components";
import ActionDropDownItem from "../actionDropdownItem";

interface Props {
   id: string;
   options: {
      label: string;
      onClick: () => void;
      color?: string;
   }[];
}

const ActionDropdown: React.FC<Props> = ({ options, id }) => {
   const [showDropdown, setShowDropdown] = useState(false);
   const actionDropdownRef = useRef<HTMLDivElement | null>(null);

   const handleClick = (event: MouseEvent) => {
      if (actionDropdownRef.current && !actionDropdownRef.current.contains(event?.target as Node)) setShowDropdown(false);
   };

   useEffect(() => {
      document.addEventListener("click", (event) => handleClick(event));
      return () => {
         document.removeEventListener("click", (event) => handleClick(event));
      };
   }, []);

   return (
      <div ref={actionDropdownRef}>
         <IconButton
            className="btn_icon_default rounded row center"
            iconsize="0.875rem"
            iconName="Ellipsisis"
            onClick={() => setShowDropdown((prev) => !prev)}
            data-testid="icon-button"
         />
         {showDropdown && (
            <div className="action-dropdown semi_rounded b_darkopaque drop_shadow bg_white" data-testid="action-dropdown">
               <ul id="action_box">
                  {options.map((option, index) => (
                     <ActionDropDownItem key={`${id}-${index}`} label={option.label} onClick={option.onClick} color={option.color} />
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};

export default ActionDropdown;
