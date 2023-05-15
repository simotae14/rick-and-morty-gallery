/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Heading from '.';

expect.extend(toHaveNoViolations);

describe('Components => atoms => Heading', () => {
  it('should render the Heading', () => {
    const { asFragment } = render(<Heading title="title" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Heading title="title" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
