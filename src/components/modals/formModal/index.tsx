import React from "react";
import { ModalProps, withModal } from "components/modals/modal";
import ModalFooter from "components/modals/modalFooter";

interface Props {
   onSubmit: () => void;
   children: React.ReactNode;
}

const FormModal: React.FC<Props & ModalProps> = ({ onSubmit, onClose, children }) => {
   return (
      <>
         {children}
         <ModalFooter
            actionColor="primary"
            actionText="Submit"
            secondaryColor="secondary"
            onActionClick={onSubmit}
            secondaryText="Cancel"
            onSecondaryClick={onClose}
         />
      </>
   );
};

export default withModal(FormModal);
