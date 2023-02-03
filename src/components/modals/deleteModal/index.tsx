import React from "react";
import {Device} from "types/models/deviceType";
import {ModalProps, withModal} from "components/modals/modal";
import ModalFooter from "components/modals/modalFooter";
import "./deleteModal.css";

interface Props extends ModalProps {
    device: Device;
    onDelete: (device: Device) => void;
    text: string
}

const DeleteModal: React.FC<Props> = ({ device, text, onDelete, ...props }) => {
    return (
        <>
            <div className="message_wrapper row f_normal black100">
                <p className="f_normal h4" meta-testid="delete-text">{text}</p>
            </div>
            <ModalFooter
                actionColor="danger"
                actionText="Delete"
                onActionClick={() => onDelete(device)}
                onSecondaryClick={props.onClose}
                secondaryText="Cancel"
                secondaryColor="basic"
            />
        </>
    );
};

export default withModal(DeleteModal);
