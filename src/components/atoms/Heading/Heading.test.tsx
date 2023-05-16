/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { axe, toHaveNoViolations } from 'jest-axe';

import Heading from '.';

expect.extend(toHaveNoViolations);

describe('Components => atoms => Heading', () => {
  it('should render the Heading', () => {
    const { asFragment } = render(
      <MemoryRouter initialEntries={['/']}>
        <Heading title="title" />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not fail any accessibility tests', async () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Heading title="title" />
      </MemoryRouter>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
