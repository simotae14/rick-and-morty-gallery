/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Spinner from '.';

expect.extend(toHaveNoViolations);

describe('Components => molecules => Spinner', () => {
  it('should render the Spinner', () => {
    const { asFragment } = render(<Spinner />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Spinner />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
