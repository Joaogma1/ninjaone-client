import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import {DeleteModal} from "components";
import {Device} from "types/models/deviceType";
import {OperatingSystem} from "types";

describe("DeleteModal", () => {

    const action = "Delete Device"
    const device: Device = {
        id: "e8okoP2l5",
        system_name: "DESKTOP-SMART",
        type: "WINDOWS" as OperatingSystem,
        hdd_capacity: "10",
    };
    it("renders correctly", () => {

        const text = "Are you sure you want to delete this device?";
        const onDelete = jest.fn();
        const onClose = jest.fn();
        render(
            <DeleteModal device={device} text={text} onDelete={onDelete} onClose={onClose} isOpen action={action} />
        );
        expect(screen.getByText(text)).toBeInTheDocument();
        expect(screen.getByText("Delete")).toBeInTheDocument();
        expect(screen.getByText("Cancel")).toBeInTheDocument();
    });

    it("calls onDelete when delete button is clicked", () => {
        const text = "Are you sure you want to delete this device?";
        const onDelete = jest.fn();
        const onClose = jest.fn();
        render(
            <DeleteModal device={device} text={text} onDelete={onDelete} onClose={onClose} isOpen action={action} />
        );
        fireEvent.click(screen.getByText("Delete"));
        expect(onDelete).toHaveBeenCalledWith(device);
    });

    it("calls onClose when cancel button is clicked", () => {
        const text = "Are you sure you want to delete this device?";
        const onDelete = jest.fn();
        const onClose = jest.fn();
        render(
            <DeleteModal device={device} text={text} onDelete={onDelete} onClose={onClose} isOpen action={action} />
        );
        fireEvent.click(screen.getByText("Cancel"));
        expect(onClose).toHaveBeenCalled();
    });

    it("Should not render if isOpen is false", () => {
        const text = "Are you sure you want to delete this device?";
        const onDelete = jest.fn();
        const onClose = jest.fn();
        render(
            <DeleteModal device={device} text={text} onDelete={onDelete} onClose={onClose} isOpen={false} action={action} />
        );
        expect(screen.queryByText(action)).not.toBeInTheDocument();
    });
});