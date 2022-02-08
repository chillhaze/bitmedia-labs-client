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
export const NoData = styled.div`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.main};
`;
export const NoDataTitle = styled.h2`
  font-size: 24px;
  line-height: 26px;
  color: ${props => props.theme.palette.text.white};
`;
