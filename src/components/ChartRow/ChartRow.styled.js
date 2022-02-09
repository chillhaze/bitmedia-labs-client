import styled from '@emotion/styled';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const Wrapper = styled.div``;

export const TableRowStyled = styled(TableRow)`
  &:nth-of-type(even) {
    background-color: #f1f1f1;
  }
`;

export const TableCellStyled = styled(TableCell)`
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(3)};

  font-size: 14px;
  line-height: 17px;
  border: none;

  & a {
    color: ${props => props.theme.palette.text.blue};
  }
`;
