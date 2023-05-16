import { DefaultGrid } from './Grid.styles';

/**
 * Component used to show the cards in a structured way
 */
function Grid({
  children,
}: {
  /**
   * It is the content wrapped inside the layout
   */
  children: React.ReactNode;
}) {
  return <DefaultGrid>{children}</DefaultGrid>;
}

export default Grid;
