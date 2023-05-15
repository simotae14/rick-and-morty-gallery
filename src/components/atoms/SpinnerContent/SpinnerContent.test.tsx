/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import SpinnerContent from '.';

expect.extend(toHaveNoViolations);

describe('Components => atoms => SpinnerContent', () => {
  it('should render the SpinnerContent', () => {
    const { asFragment } = render(<SpinnerContent />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<SpinnerContent />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
