import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: ${props => props.theme.spacing(12)};
  background-color: ${props => props.theme.palette.secondary.main};

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;
export const TextWrapper = styled.div`
  padding: 14px 0;
  display: flex;
  justify-content: space-between;
  color: ${props => props.theme.palette.text.white};

  & a {
    font-size: 24px;
    line-height: 29px;
  }

  @media (max-width: 750px) {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    & a {
      font-size: 24px;
      line-height: 24px;
    }
  }
`;

export const AllRights = styled.p`
  font-size: 16px;
  line-height: 29px;
  font-weight: 300;

  @media (max-width: 750px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const Copyright = styled.p`
  font-size: 16px;
  line-height: 29px;
  font-weight: 300;

  @media (max-width: 750px) {
    font-size: 10px;
    line-height: 14px;
    font-weight: 200;
  }
`;
