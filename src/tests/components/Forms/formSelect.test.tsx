import React from 'react';
import {render, screen} from '@testing-library/react';
import {FormSelect} from 'components';
import {deviceTypeList} from "types/interfaces/devicesClient";
describe('FormSelect', () => {

    it('should render label with name, select component and no error', () => {
        const props = {
            labelName: 'Device type',
            hasError: false,
            errorMessage: 'Please select a Device type',
            isMandatory: true,
            name: 'device_type',
            options: deviceTypeList,
        };

        render(<FormSelect {...props} />);

        const label = screen.queryByText(`${props.labelName}`);
        expect(label).toBeInTheDocument();

        const select = screen.getByTestId('dropdown');
        expect(select).toBeInTheDocument();

        const error = screen.queryByText(props.errorMessage);
        expect(error).not.toBeInTheDocument();
    });

    it('should render label with name, select component and error message if hasError is true', () => {

        const props = {
            labelName: 'Device type',
            hasError: true,
            errorMessage: 'Please select a Device type',
            isMandatory: true,
            name: 'device_type',
            options: deviceTypeList,
        };

        render(<FormSelect {...props} />);

        const label = screen.queryByText(`${props.labelName}`);
        expect(label).toBeInTheDocument();

        const select = screen.getByTestId('dropdown');
        expect(select).toBeInTheDocument();

        const error = screen.getByText(props.errorMessage);
        expect(error).toBeInTheDocument();
    });
});
