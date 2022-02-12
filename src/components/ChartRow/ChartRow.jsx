import dateConvert from 'utils/dateConvert';
import weiToEtherConvert from 'utils/weiToEtherConvert';
import { TableCellStyled, TableRowStyled } from './ChartRow.styled';

export default function ChartRow({ item }) {
  const {
    blockNumber,
    transactionId,
    senderAdress,
    recipientsAdress,
    blockConfirmations,
    value,
    date,
    transactionFee,
  } = item;

  return (
    <TableRowStyled sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCellStyled scope="row">{blockNumber}</TableCellStyled>
      <TableCellStyled align="right">
        <a href={`https://etherscan.io/tx/${transactionId}`}>{transactionId}</a>
      </TableCellStyled>
      <TableCellStyled align="right">{senderAdress}</TableCellStyled>
      <TableCellStyled align="right">{recipientsAdress}</TableCellStyled>
      <TableCellStyled align="right">{blockConfirmations}</TableCellStyled>
      <TableCellStyled align="right">{dateConvert(date)}</TableCellStyled>
      <TableCellStyled align="right">
        {weiToEtherConvert(value)}
      </TableCellStyled>
      <TableCellStyled align="right">{transactionFee}</TableCellStyled>
    </TableRowStyled>
  );
}
