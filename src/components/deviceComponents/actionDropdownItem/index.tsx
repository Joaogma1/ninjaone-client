import React from "react";
import "./actionDropdownItem.css";

interface Props {
   label: string;
   color?: string;
   onClick: () => void;
}

const ActionDropDownItem: React.FC<Props> = ({ label, color = "#000", onClick }) => (
   <li className="list-item start center" style={{ color: color }} onClick={onClick}>
      {label}
   </li>
);

export default ActionDropDownItem;
