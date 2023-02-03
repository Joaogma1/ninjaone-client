import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {FormModal} from 'components';

describe('FormModal', () => {
    const children = <div data-testid="children">Content</div>;
    it('should render children and modal footer', () => {
        //arrange
        const actionName = "Create Device"
        const onSubmit = jest.fn();
        const onClose = jest.fn();
        //act

        render(
            <FormModal isOpen onSubmit={onSubmit} onClose={onClose} action={actionName}>
                {children}
            </FormModal>
        );
        const child = screen.getByTestId('children')
        const actionBtn = screen.getByText('Submit')
        const secondaryBtn = screen.getByText('Cancel')
        const headerTitle = screen.getByText(actionName)
        //assert
        expect(child).toBeInTheDocument();
        expect(actionBtn).toBeInTheDocument();
        expect(secondaryBtn).toBeInTheDocument();
        expect(headerTitle).toHaveTextContent(actionName);
    });

    it('should call onSubmit when submit button is clicked', () => {
        //arrange
        const onSubmit = jest.fn();
        const onClose = jest.fn();
        //act

        render(
            <FormModal isOpen onSubmit={onSubmit} onClose={onClose} action={''} >
                {children}
            </FormModal>
        );
        const actionBtn = screen.getByText('Submit')
        fireEvent.click(actionBtn);
        //assert
        expect(onSubmit).toHaveBeenCalled();
    });

    it('should call onClose when cancel button is clicked', () => {
        //arrange
        const onSubmit = jest.fn();
        const onClose = jest.fn();
        //act
        render(
            <FormModal isOpen onSubmit={onSubmit} onClose={onClose} action={''} >
                {children}
            </FormModal>
        );
        const secondaryBtn = screen.getByText('Cancel')
        fireEvent.click(secondaryBtn);
        //assert
        expect(onClose).toHaveBeenCalled();
    });

    it('does not render the component if isOpen prop is false', () => {
        //arrange
        const actionName = "not rendered action"
        const onSubmit = jest.fn();
        const onClose = jest.fn();
        //act
        render(
            <FormModal isOpen={false} onSubmit={onSubmit} onClose={onClose} action={actionName} >
                {children}
            </FormModal>
        );
        //assert
        expect(screen.queryByText(actionName)).not.toBeInTheDocument();
    });
});