import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1360px) {
    max-width: 1360px;
  }
`;
