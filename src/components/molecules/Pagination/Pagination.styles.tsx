import styled from 'styled-components';

export const PaginationContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 272px;
  justify-content: space-around;
`;

export const PaginationItem = styled.li`
  font-family: 'SFProText', serif;
  font-size: 0.75rem;
  color: '#121C33';
  -webkit-tap-highlight-color: transparent;
`;

export const Arrow = styled(PaginationItem)<{ disabled: boolean }>`
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  color: ${(props) => (props.disabled ? '#666687' : '#121C33')};
`;
