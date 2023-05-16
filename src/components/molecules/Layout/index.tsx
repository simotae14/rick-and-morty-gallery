import { BaseWrapper } from './Layout.styles';

/**
 * Component used for the Shared layout
 */
function Layout({
  children,
}: {
  /**
   * It is the content wrapped inside the layout
   */
  children: React.ReactNode;
}) {
  return <BaseWrapper>{children}</BaseWrapper>;
}

export default Layout;
