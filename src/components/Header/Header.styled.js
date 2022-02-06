import styled from '@emotion/styled';

export const Wrapper = styled.header`
  padding-top: 10px;
  padding-bottom: 13px;
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.text.white};
  & a {
    font-size: 40px;
    line-height: 49px;
  }
`;
