import React from "react";
import {ButtonColorSchema} from "types/utils.";
import {Button} from "components";

interface Props {
   actionColor: ButtonColorSchema;
   actionText: string;
   onActionClick: () => void;
   secondaryColor: ButtonColorSchema;
   onSecondaryClick: () => void;
   secondaryText: string;
}
const ModalFooter: React.FC<Props> = ({ onActionClick, onSecondaryClick, actionText, secondaryText, actionColor, secondaryColor }) => {
   return (
      <div className="modal_footer container center end row">
         <Button
            style={{ height: "2.5rem", width: "auto" }}
            onClick={onSecondaryClick}
            className={`b_gray bg_white space_tiny ${secondaryColor === "basic" ? "black100 " : secondaryColor === "secondary" ? "blue" : ""}`}
            text={secondaryText}
         />
         <Button
            style={{ height: "2.5rem", width: "auto" }}
            onClick={onActionClick}
            className={`white100 space_tiny ${actionColor === "danger" ? "bg_danger " : actionColor === "primary" ? "bg_blue" : ""}`}
            text={actionText}
         />
      </div>
   );
};

export default ModalFooter;
