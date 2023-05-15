/* eslint-disable import/no-extraneous-dependencies */
import { describe, it } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import CardWrapper from './index';

expect.extend(toHaveNoViolations);

describe('Components => atoms => CardWrapper', () => {
  it('should render the base CardWrapper when no props are passed', () => {
    const { asFragment } = render(<CardWrapper>content</CardWrapper>);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render the spinner CardWrapper when is passed the cardWrapperType "spinner"', () => {
    const { asFragment } = render(
      <CardWrapper cardWrapperType="spinner">content</CardWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should render the spinner CardWrapper when is passed the cardWrapperType "card"', () => {
    const { asFragment } = render(
      <CardWrapper cardWrapperType="card">content</CardWrapper>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('should not fail any accessibility tests the base Card Wrapper', async () => {
    const { container } = render(<CardWrapper>content</CardWrapper>);
    expect(await axe(container)).toHaveNoViolations();
  });
  it('should not fail any accessibility tests the spinner Card Wrapper', async () => {
    const { container } = render(
      <CardWrapper cardWrapperType="spinner">content</CardWrapper>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it('should not fail any accessibility tests the card Card Wrapper', async () => {
    const { container } = render(
      <CardWrapper cardWrapperType="card">content</CardWrapper>
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
