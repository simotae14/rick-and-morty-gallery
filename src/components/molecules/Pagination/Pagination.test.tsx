/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import { describe, it, vi } from 'vitest';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

import Pagination from '.';

expect.extend(toHaveNoViolations);

const mockedPropsOnePage = {
  onPageChange: vi.fn(),
  numberPages: 1,
  currentPage: 1,
};

const mockedPropsFirstPage = {
  onPageChange: vi.fn(),
  numberPages: 4,
  currentPage: 1,
};

const mockedPropsMultiplePages = {
  onPageChange: vi.fn(),
  numberPages: 10,
  currentPage: 5,
};

const mockedPropsLastPage = {
  onPageChange: vi.fn(),
  numberPages: 4,
  currentPage: 4,
};

describe('Components => molecules => Pagination', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });
  it('should not render the Pagination when we have just one page', () => {
    const { container } = render(<Pagination {...mockedPropsOnePage} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should render the Pagination when we are in the first page', () => {
    const { getByText } = render(<Pagination {...mockedPropsFirstPage} />);
    expect(getByText(/previous/i)).toBeInTheDocument();
    expect(getByText(/next/i)).toBeInTheDocument();
  });

  it('should not click the previous button in the Pagination when we are in the first page', () => {
    const { getByText } = render(<Pagination {...mockedPropsFirstPage} />);
    const prevBtn = getByText(/previous/i);
    expect(prevBtn).toHaveAttribute('disabled', '');
    fireEvent.click(prevBtn);
    expect(mockedPropsFirstPage.onPageChange).toHaveBeenCalledTimes(0);
  });

  it('should click the next button in the Pagination when we are in the first page', () => {
    const { getByText } = render(<Pagination {...mockedPropsFirstPage} />);
    const nextBtn = getByText(/next/i);
    expect(nextBtn).not.toHaveAttribute('disabled', '');
    fireEvent.click(nextBtn);
    expect(mockedPropsFirstPage.onPageChange).toHaveBeenCalledTimes(1);
  });

  it('should click the previous button in the Pagination when we are in the middle page', () => {
    const { getByText } = render(<Pagination {...mockedPropsMultiplePages} />);
    const prevBtn = getByText(/previous/i);
    expect(prevBtn).not.toHaveAttribute('disabled', '');
    fireEvent.click(prevBtn);
    expect(mockedPropsMultiplePages.onPageChange).toHaveBeenCalledTimes(1);
  });

  it('should click the next button in the Pagination when we are in the middle page', () => {
    const { getByText } = render(<Pagination {...mockedPropsMultiplePages} />);
    const nextBtn = getByText(/next/i);
    expect(nextBtn).not.toHaveAttribute('disabled', '');
    fireEvent.click(nextBtn);
    expect(mockedPropsMultiplePages.onPageChange).toHaveBeenCalledTimes(1);
  });

  it('should click the previous button in the Pagination when we are in the last page', () => {
    const { getByText } = render(<Pagination {...mockedPropsLastPage} />);
    const prevBtn = getByText(/previous/i);
    expect(prevBtn).not.toHaveAttribute('disabled', '');
    fireEvent.click(prevBtn);
    expect(mockedPropsLastPage.onPageChange).toHaveBeenCalledTimes(1);
  });

  it('should not click the next button in the Pagination when we are in the last page', () => {
    const { getByText } = render(<Pagination {...mockedPropsLastPage} />);
    const nextBtn = getByText(/next/i);
    expect(nextBtn).toHaveAttribute('disabled', '');
    fireEvent.click(nextBtn);
    expect(mockedPropsLastPage.onPageChange).toHaveBeenCalledTimes(0);
  });

  it('should not fail any accessibility tests when we have just one page', async () => {
    const { container } = render(<Pagination {...mockedPropsOnePage} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should not fail any accessibility tests when we we are in the first page', async () => {
    const { container } = render(<Pagination {...mockedPropsFirstPage} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should not fail any accessibility tests when we we are in some other page', async () => {
    const { container } = render(<Pagination {...mockedPropsMultiplePages} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should not fail any accessibility tests when we we are in the last page', async () => {
    const { container } = render(<Pagination {...mockedPropsLastPage} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
