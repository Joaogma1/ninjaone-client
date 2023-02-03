import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import { withModal } from 'components/modals/modal';

//global Arrange
const TestComponent = () => {
    return <div data-testeid="test">Test component</div>;
};

const TestModal = withModal(TestComponent);

describe('withModal', () => {
    it('renders the component it wraps', () => {
        //arrange
        const actionName = "Test action"
        //act
        render(
            <TestModal isOpen={true} action={actionName} onClose={() => {}} />
        );
        const root = screen.getByTestId('modal-modal-root')
        const overlay = screen.getByTestId('modal-overlay')
        const header = screen.getByTestId('modal-header')
        const wrappedComponent = screen.getByTestId('test')
        const headerTitle = screen.getByText(actionName);
        //assert
        expect(root).toBeInTheDocument();
        expect(overlay).toBeInTheDocument();
        expect(header).toBeInTheDocument();
        expect(wrappedComponent).toBeInTheDocument();
        expect(headerTitle).toBeInTheDocument();
        expect(headerTitle).toHaveTextContent(actionName);
    });

    it('does not render the component it wraps if isOpen prop is false', () => {
        //arrange
        const actionName = "not rendered action"
        //act
        render(
            <TestModal isOpen={false} action={actionName} onClose={() => {}} />
        );
        const headerTitle = screen.getByText(actionName);
        //assert
        expect(headerTitle).not.toBeInTheDocument();
    });

    it('calls the onClose prop when the close button is clicked', () => {
        //arrange
        const onClose = jest.fn();
        //act
        render(
            <TestModal isOpen={true} action="Test action" onClose={onClose} />
        );
        const closeButtom = screen.getByTestId('close-button')
        fireEvent.click(closeButtom);
        //assert
        expect(onClose).toHaveBeenCalled();
    });
});