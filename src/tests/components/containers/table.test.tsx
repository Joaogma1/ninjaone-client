import React from 'react';
import { render, screen } from '@testing-library/react';
import {Table} from 'components';

describe('Table component', () => {



    it('should render thead and tbody correctly', () => {

        // Arrange
        const Thead = <th>Device</th>;
        const Tbody = (<tr><td>Test</td></tr>);

        // Act
        render(<Table thead={Thead} tbody={Tbody} />);

        // Assert
        expect(screen.getByTestId('table_id')).toBeInTheDocument();
        expect(screen.getByTestId('table_thead_id')).toBeInTheDocument();
        expect(screen.getByTestId('table_tbody_id')).toBeInTheDocument();
    });

    it('should not render thead when it is not passed', () => {
        // Arrange
        const tbody = <tr><td>Jane Doe</td></tr>;

        // Act
        render(<Table tbody={tbody} />);

        // Assert
        expect(screen.queryByTestId('table_thead_id')).not.toBeInTheDocument();
        expect(screen.getByTestId('table_tbody_id')).toBeInTheDocument();
    });
});