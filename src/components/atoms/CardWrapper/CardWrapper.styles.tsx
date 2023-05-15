import styled from 'styled-components';

export const BasicWrapper = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  &:hover {
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.2);
  }
`;

export const SpinnerWrapper = styled(BasicWrapper)`
  width: 240px;
  height: 240px;
`;

export const SpacesCardWrapper = styled(BasicWrapper)`
  width: 272px;
  height: 208px;
`;
