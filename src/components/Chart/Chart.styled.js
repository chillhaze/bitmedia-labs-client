import styled from '@emotion/styled';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

export const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.spacing(12)};
`;

export const TableHeadStyled = styled(TableHead)`
  background-color: ${props => props.theme.palette.primary.main};
  color: ${props => props.theme.palette.text.white};
`;
export const TableRowStyled = styled(TableRow)`
  & th {
    color: ${props => props.theme.palette.text.white};
    min-width: 50px;
  }
`;

export const TableCellStyled = styled(TableCell)`
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  text-align: start;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};

  @media (max-width: 830px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
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
  height: 462px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.palette.primary.main};
  /* 
  @media (max-width: 850px) {
    min-height: 880px;
  }
  @media (max-width: 769px) {
    min-height: 720px;
  }
  @media (max-width: 415px) {
    min-height: 465px;
  } */
`;
export const NoDataTitle = styled.h2`
  font-size: 24px;
  line-height: 26px;
  color: ${props => props.theme.palette.text.white};
`;
