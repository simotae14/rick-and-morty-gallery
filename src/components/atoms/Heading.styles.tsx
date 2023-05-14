import styled from 'styled-components';

export const Heading = styled.h2<{ active: boolean }>`
  color: ${(props) => (props.active ? 'red' : 'blue')};
`;
