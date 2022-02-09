import truncateString from 'utils/truncateString';
import hexToDecConvert from 'utils/hexToDecConvert';
import dateConvert from 'utils/dateConvert';
import { useSelector } from 'react-redux';
import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';
import weiToEtherConvert from 'utils/weiToEtherConvert';
import { TableCellStyled, TableRowStyled } from './ChartRow.styled';
import transactionFeeCalc from 'utils/transactionFeeCalc';

export default function ChartRow({ item, transactions, isMobile }) {
  const { blockNumber, hash, from, to, value, gas, gasPrice } = item;
  const timestamp = dateConvert(
    useSelector(transactionsSelectors.getTransactionsTimestamp),
  );

  return (
    <TableRowStyled sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCellStyled scope="row">
        {hexToDecConvert(blockNumber)}
      </TableCellStyled>
      <TableCellStyled align="right">
        <a href={`https://etherscan.io/tx/${hash}`}>
          {truncateString(hash, 12, isMobile)}
        </a>
      </TableCellStyled>
      <TableCellStyled align="right">
        {truncateString(from, 14, isMobile)}
      </TableCellStyled>
      <TableCellStyled align="right">
        {truncateString(to, 14, isMobile)}
      </TableCellStyled>
      <TableCellStyled align="right">{transactions.length}</TableCellStyled>
      <TableCellStyled align="right">{timestamp}</TableCellStyled>
      <TableCellStyled align="right">
        {weiToEtherConvert(value)}
      </TableCellStyled>
      <TableCellStyled align="right">
        {transactionFeeCalc(gas, gasPrice)}
      </TableCellStyled>
    </TableRowStyled>
  );
}
