import React from "react";
import ModalHeader from "components/modals/modalHeader";
import "./modal.css";

export interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   action: string;
}

const withModal = <P extends object>(Component: React.ComponentType<P>) => {
   return (props: P & ModalProps) => {
      return props.isOpen ? (
         <div className="modal_root" meta-testid="modal-root">
            <div className="modal_overlay" meta-testid="modal-overlay" >
               <div className="modal col spacing_small bg_white rounded">
                  <ModalHeader action={props.action} onClose={props.onClose} data-testid='modal-header' />
                  <Component {...props} onClose={props.onClose} />
               </div>
            </div>
         </div>
      ) : null;
   };
};

export { withModal };
