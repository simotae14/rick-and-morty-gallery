import styled from 'styled-components';

export const DefaultGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1220px;
  width: 100%;
  overflow: auto;
  @media (max-width: 1220px) {
    justify-content: center;
    padding-bottom: 96px;
  }
`;
