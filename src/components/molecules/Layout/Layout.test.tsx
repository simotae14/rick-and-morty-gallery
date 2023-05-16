/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Layout from '.';

expect.extend(toHaveNoViolations);

describe('Components => molecules => Layout', () => {
  it('should render the Layout', () => {
    const { asFragment } = render(<Layout>content</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render the content inside the Layout', () => {
    const { getByText } = render(<Layout>content</Layout>);
    expect(getByText(/content/i)).toBeInTheDocument();
  });

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<Layout>content</Layout>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
