/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { describe, it, vi } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import CloseButton from '.';

expect.extend(toHaveNoViolations);

const mockedProps = {
  onClickClose: vi.fn(),
};

describe('Components => atoms => CloseButton', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });
  it('should render the CloseButton even with click handler', () => {
    const { asFragment } = render(<CloseButton {...mockedProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should click the Close Button and trigger the click handler', () => {
    const { container } = render(<CloseButton {...mockedProps} />);
    const closeBtn = container.querySelector('div');
    if (closeBtn) {
      fireEvent.click(closeBtn);
      expect(mockedProps.onClickClose).toHaveBeenCalledTimes(1);
    }
  });

  it('should not fail any accessibility tests', async () => {
    const { container } = render(<CloseButton {...mockedProps} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
