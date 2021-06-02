import { render } from '@testing-library/react';
import React from 'react';
import FeaturesSection from './FeaturesSection';

describe('FeaturesSection', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<FeaturesSection {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FeaturesSection')).toBeTruthy();
    });
});
