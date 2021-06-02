import { render } from '@testing-library/react';
import React from 'react';
import HeroSection from './HeroSection';

describe('HeroSection', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<HeroSection {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('HeroSection')).toBeTruthy();
    });
});
