import { LinkWrapper, Title } from './Heading.styles';

interface HeadingProps {
  /**
   * Is this the possible title of the page
   */
  title: string;
}

/**
 * Component used for the Heading of the page
 */
function Heading({ title }: HeadingProps) {
  return (
    <LinkWrapper to="/">
      <Title>{title}</Title>
    </LinkWrapper>
  );
}

export default Heading;
