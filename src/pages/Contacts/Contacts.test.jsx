import { render } from '@testing-library/react';
import React from 'react';
import Contacts from './Contacts';

describe('Contacts', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<Contacts {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('Contacts')).toBeTruthy();
    });
});
