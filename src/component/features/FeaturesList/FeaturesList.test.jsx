import { render } from '@testing-library/react';
import React from 'react';
import FeaturesList from './FeaturesList';

describe('FeaturesList', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<FeaturesList {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('FeaturesList')).toBeTruthy();
    });
});
