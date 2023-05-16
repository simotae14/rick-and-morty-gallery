/* eslint-disable react/require-default-props */
import {
  PaginationContainer,
  Arrow,
  PaginationContainerNoFixed,
  PaginationItem,
} from './Pagination.styles';

export const getPaginationWrapper = (isFixedOnMobile: boolean) => {
  if (isFixedOnMobile) return PaginationContainer;
  return PaginationContainerNoFixed;
};

interface PaginationProps {
  /**
   * Is the handler to change the current page
   */
  onPageChange: (newValue: number) => void;
  /**
   * Is the value representing the current page
   */
  currentPage: number;
  /**
   * Is the value representing the total number of pages
   */
  numberPages: number;
  /**
   * Is a value representing if it is fixed on mobile
   */
  isFixedOnMobile?: boolean;
}

/**
 * Component used to handle the Pagination on the Gallery
 */
function Pagination({
  onPageChange,
  currentPage,
  numberPages,
  isFixedOnMobile = true,
}: PaginationProps) {
  // if there are less than 2 pages don't render the component
  if (numberPages < 2) return null;

  const onNext = () => {
    if (currentPage < numberPages) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const CustomPaginationWrapper = getPaginationWrapper(isFixedOnMobile);

  return (
    <CustomPaginationWrapper>
      <Arrow onClick={onPrevious} disabled={currentPage < 2}>
        &lt; Previous
      </Arrow>
      <PaginationItem>
        {currentPage}/{numberPages}
      </PaginationItem>
      <Arrow onClick={onNext} disabled={currentPage === numberPages}>
        Next &gt;
      </Arrow>
    </CustomPaginationWrapper>
  );
}

export default Pagination;
