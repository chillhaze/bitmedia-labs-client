import styled from '@emotion/styled';

export const LoaderWrapper = styled.div`
  margin: 0;
  padding: 220px 0 0 0;
  height: 500px;

  display: flex;
  justify-content: center;
  /* position: fixed; */
  /* top: 42%; */
  /* left: 48%; */

  @media (max-width: 850px) {
    top: 52%;
    left: 45%;
  }

  @media (max-width: 550px) {
    top: 52%;
    left: 42%;
  }
`;
