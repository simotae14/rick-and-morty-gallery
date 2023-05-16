import styled from 'styled-components';

export const PaginationContainerNoFixed = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 272px;
  justify-content: space-around;
  margin: 16px auto;
`;

export const PaginationContainer = styled(PaginationContainerNoFixed)`
  @media (max-width: 1220px) {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f2f2f2;
    padding: 32px 100%;
    margin: 0;
    box-shadow: 0px -4px 3px rgba(0, 0, 0, 0.1);
  }
`;

export const PaginationItem = styled.li`
  font-family: 'SFProText', serif;
  font-size: 0.75rem;
  -webkit-tap-highlight-color: transparent;
`;

export const Arrow = styled(PaginationItem)<{ disabled: boolean }>`
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  color: ${(props) => (props.disabled ? '#666687' : '#121C33')};
  font-weight: ${(props) => (props.disabled ? 400 : 700)};
`;
