import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkWrapper = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Title = styled.h1`
  font-weight: 900;
  font-size: 3rem;
  padding: 32px 16px;
  margin: 0;
  max-width: 1220px;
  @media (max-width: 1220px) {
    max-width: 880px;
    margin: auto;
  }
  @media (max-width: 912px) {
    max-width: 576px;
    margin: auto;
  }
`;
