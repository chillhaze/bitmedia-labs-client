import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-top: ${props => props.theme.spacing(12)};
  background-color: ${props => props.theme.palette.secondary.main};
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
`;

export const AllRights = styled.p`
  font-size: 16px;
  line-height: 29px;
  font-weight: 300;
`;

export const Copyright = styled.p`
  font-size: 16px;
  line-height: 29px;
  font-weight: 300;
`;
