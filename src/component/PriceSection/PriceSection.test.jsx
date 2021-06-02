import { render } from '@testing-library/react';
import React from 'react';
import PriceSection from './PriceSection';

describe('PriceSection', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<PriceSection {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('PriceSection')).toBeTruthy();
    });
});
