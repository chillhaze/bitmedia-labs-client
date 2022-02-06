import styled from '@emotion/styled';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

export const Wrapper = styled.div``;
export const TableHeadStyled = styled(TableHead)`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.text.white};
`;
export const TableRowStyled = styled(TableRow)`
  & th {
    font-size: 16px;
    font-weight: 300;
    text-align: start;
    color: ${props => props.theme.palette.text.white};
  }
`;
export const TableBodyStyled = styled(TableBody)`
  & td {
    max-width: ${props => props.theme.spacing(28)};
    overflow: hidden;

    font-size: 14px;
    line-height: 17px;
    text-align: start;
    color: ${props => props.theme.palette.text.black};
  }
`;
