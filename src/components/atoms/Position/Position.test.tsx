/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Position from '.';

expect.extend(toHaveNoViolations);

const mockPropsLocation = {
  labelType: 'Location',
  name: 'Citadel of Ricks',
  type: 'Space station',
  dimension: 'unknown',
};

describe('Components => atoms => Position', () => {
  it('should render the Position whit the props passed', () => {
    const { asFragment } = render(<Position {...mockPropsLocation} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not fail any accessibility tests the Position with props', async () => {
    const { container } = render(<Position {...mockPropsLocation} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
