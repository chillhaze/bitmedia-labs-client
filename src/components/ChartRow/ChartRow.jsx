import truncateString from 'utils/truncateString';
import dateConvert from 'utils/dateConvert';
import weiToEtherConvert from 'utils/weiToEtherConvert';
import { TableCellStyled, TableRowStyled } from './ChartRow.styled';

export default function ChartRow({ item, transactions, isMobile }) {
  const {
    blockNumber,
    transactionId,
    senderAdress,
    recipientsAdress,
    value,
    date,
    transactionFee,
  } = item;

  return (
    <TableRowStyled sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCellStyled scope="row">{blockNumber}</TableCellStyled>
      <TableCellStyled align="right">
        <a href={`https://etherscan.io/tx/${transactionId}`}>
          {truncateString(transactionId, 12, isMobile)}
        </a>
      </TableCellStyled>
      <TableCellStyled align="right">
        {truncateString(senderAdress, 14, isMobile)}
      </TableCellStyled>
      <TableCellStyled align="right">
        {truncateString(recipientsAdress, 14, isMobile)}
      </TableCellStyled>
      <TableCellStyled align="right">{transactions.length}</TableCellStyled>
      <TableCellStyled align="right">{dateConvert(date)}</TableCellStyled>
      <TableCellStyled align="right">
        {weiToEtherConvert(value)}
      </TableCellStyled>
      <TableCellStyled align="right">{transactionFee}</TableCellStyled>
    </TableRowStyled>
  );
}
