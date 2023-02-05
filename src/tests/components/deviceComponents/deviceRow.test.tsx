import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {DeviceRow} from 'components/deviceComponents';
import {Device} from "types/models/deviceType";
import {OperatingSystem} from "types";

const item : Device = {
    id: '1',
    type: 'Windows' as OperatingSystem,
    system_name: 'My Workstation',
    hdd_capacity: "500"
};

const onDelete = jest.fn();
const onEdit = jest.fn();

describe('DeviceRow', () => {
    it('renders device information correctly', () => {
        render(
            <table>
                <tbody>
                <DeviceRow item={item} onDelete={onDelete} onEdit={onEdit}/>
                </tbody>
            </table>
        );

        const deviceRow = screen.getByTestId('device-row');
        expect(deviceRow).toBeInTheDocument();
        expect(screen.getByText('My Workstation'.toUpperCase())).toBeInTheDocument();
        expect(screen.getByText('Windows workstation - 500 GB')).toBeInTheDocument();
    });

    it('opens action dropdown on click', () => {
        render(
            <table>
                <tbody>
                <DeviceRow item={item} onDelete={onDelete} onEdit={onEdit}/>
                </tbody>
            </table>
        );

        const actionDropdown = screen.queryByTestId('action-dropdown');

        expect(actionDropdown).toBeNull();

        fireEvent.click(screen.getByTestId('icon-button'));

        expect(screen.getByTestId('action-dropdown')).toBeVisible();
    });

    it('calls onDelete when delete option is clicked', () => {
        render(
            <table>
                <tbody>
                <DeviceRow item={item} onDelete={onDelete} onEdit={onEdit}/>
                </tbody>
            </table>
        );

        fireEvent.click(screen.getByTestId('icon-button'));
        fireEvent.click(screen.getByText('Delete'));

        expect(onDelete).toHaveBeenCalled();
    });

    it('calls onEdit when edit option is clicked', () => {
        render(
            <table>
                <tbody>
                <DeviceRow item={item} onDelete={onDelete} onEdit={onEdit}/>
                </tbody>
            </table>
        );

        fireEvent.click(screen.getByTestId('icon-button'));
        fireEvent.click(screen.getByText('Edit'));

        expect(onEdit).toHaveBeenCalledTimes(1);
    });
});
