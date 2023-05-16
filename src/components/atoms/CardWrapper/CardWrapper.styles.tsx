import styled from 'styled-components';

export const DefaultWrapper = styled.div`
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
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const BaseWrapper = styled(DefaultWrapper)`
  max-width: 408px;
  padding: 32px;
  position: relative;
  height: fit-content;
  width: fill-available;
  width: -webkit-fill-available;
`;

export const SpinnerWrapper = styled(DefaultWrapper)`
  width: 240px;
  height: 240px;
  margin: 112px auto;
`;

export const RickCardWrapper = styled(DefaultWrapper)`
  position: relative;
  margin: 16px 16px;
  width: 100%;
  max-width: 272px;
  height: 208px;
`;

export const RickCardSelectedWrapper = styled(RickCardWrapper)`
  border: 2px solid #121c33;
`;

export const DetailCardWarapper = styled(BaseWrapper)`
  margin: 36px 0 0 0;
`;
