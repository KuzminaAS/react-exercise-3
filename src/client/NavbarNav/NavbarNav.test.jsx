import { render } from '@testing-library/react';
import React from 'react';
import NavbarNav from './NavbarNav';

describe('NavbarNav', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<NavbarNav {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('NavbarNav')).toBeTruthy();
    });
});
