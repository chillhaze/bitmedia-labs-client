import styled from '@emotion/styled';

export const LoaderWrapper = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 42%;
  left: 48%;

  @media (max-width: 850px) {
    top: 42%;
    left: 45%;
  }

  @media (max-width: 550px) {
    top: 42%;
    left: 42%;
  }
`;
