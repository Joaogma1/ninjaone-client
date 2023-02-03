import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import ModalHeader from 'components/modals/modalHeader';

test('should render the modal header with action and onClose', () => {
    //arrange
    const action = "Add device";
    const onClose = jest.fn();
    //act
    render(<ModalHeader action={action} onClose={onClose} />);
    const title = screen.getByText(action);
    const iconButton = screen.getByTestId("close-button");
    //assert
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("h1 black100 f_medium");
    expect(iconButton).toBeInTheDocument();
    expect(iconButton).toHaveClass("bg_transparent");
    fireEvent.click(iconButton);
    expect(onClose).toHaveBeenCalled();
});