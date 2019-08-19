import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('matches snapshot', () => {
      const tree = renderer.create(<Dashboard />);
  
      expect(tree.toJSON()).toMatchSnapshot();
    });
    
      it('should render controls and display', () => {
		const { getByText } = render(<Dashboard />);

		getByText(/unlocked/i);
		getByText(/open/i);
		getByText(/lock gate/i);
        getByText(/close gate/i);
    });
});