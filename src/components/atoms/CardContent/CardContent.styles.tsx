/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
  padding: 0 16px;
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
`;

export const Title = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  color: #121c33;
  opacity: 0.6;
  margin: 0;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatusIcon = styled.span<{ status?: string }>`
  height: 0.5rem;
  width: 0.5rem;
  background-color: ${(props) =>
    props?.status === 'Alive'
      ? 'rgb(85, 204, 68)'
      : props?.status === 'Dead'
      ? 'rgb(214, 61, 46)'
      : 'rgb(158, 158, 158)'};
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.375rem;
`;
