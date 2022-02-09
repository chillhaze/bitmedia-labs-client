import styled from '@emotion/styled';
import { Pagination } from '@mui/material';

export const Wrapper = styled.div`
  margin-top: ${props => props.theme.spacing(12)};
  display: flex;
  justify-content: center;

  @media (max-width: 821px) {
    margin-top: ${props => props.theme.spacing(24)};
  }

  @media (max-width: 470px) {
    margin-top: ${props => props.theme.spacing(12)};
  }
`;

export const PaginationStyled = styled(Pagination)``;
