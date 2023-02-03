import React from "react";
import {IconButton} from "components";
import "./modalHeader.css";

interface Props {
   action: string;
   onClose: () => void;
}
const ModalHeader: React.FC<Props> = ({ action, onClose }) => {
   return (
      <div className="row center modal_top container separated ">
         <h2 className="h1 black100 f_medium">{action}</h2>
         <IconButton
            style={{ height: "2rem", widows: "2rem" }}
            className="bg_transparent"
            color="var(--black100)"
            iconsize="1rem"
            iconName="Xmark"
            onClick={onClose}
            data-testid="close-button"
         />
      </div>
   );
};

export default ModalHeader;
