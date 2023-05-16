import styled from 'styled-components';

export const CloseButtonContainer = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 28, 51, 0.1);
  border-radius: 8px;
  cursor: pointer;
  position: relative;
`;

export const CloseIcon = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  width: 32px;
  height: 32px;
  opacity: 0.7;
  &hover {
    opacity: 1;
  }
  &::after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &::before {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;
