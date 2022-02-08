import Container from 'components/Container/Container';
import React from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Wrapper,
  TableHeadStyled,
  TableRowStyled,
  TableBodyStyled,
  NoData,
  NoDataTitle,
} from './Chart.styled';
import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';
import { useSelector } from 'react-redux';
import LoaderElement from 'components/LoaderElement/LoaderElement';
import { useMediaQuery } from 'react-responsive';

export default function Chart() {
  // const rows = null;
  const transactions = useSelector(transactionsSelectors.getTransactionsData);
  const isLoadingData = useSelector(
    transactionsSelectors.isLoadingTransactions,
  );

  const isMobile = useMediaQuery({
    query: '(max-width: 750px)',
  });

  const truncate = (str, n) => {
    if (isMobile) {
      n = n / 2;
    }

    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <Wrapper>
      <Container>
        <TableContainer component={Paper}>
          {isLoadingData && <LoaderElement />}

          {transactions ? (
            <Table size="small" aria-label="a dense table">
              <TableHeadStyled>
                <TableRowStyled>
                  <TableCell
                  // style={{
                  //   position: 'sticky',
                  //   left: 0,
                  //   zIndex: 1,
                  //   background: '#fff',
                  // }}
                  >
                    Block number
                  </TableCell>
                  <TableCell align="right">Transaction ID</TableCell>
                  <TableCell align="right">Sender address</TableCell>
                  <TableCell align="right">Recipient's address</TableCell>
                  <TableCell align="right">Block confirmations</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Value</TableCell>
                  <TableCell align="right">Transaction Fee</TableCell>
                </TableRowStyled>
              </TableHeadStyled>
              <TableBodyStyled>
                {transactions.map(
                  ({ number, hash, from, transactions, timestamp, miner }) => (
                    <TableRow
                      key={timestamp}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        // style={{
                        //   position: 'sticky',
                        //   left: 0,
                        //   zIndex: 1,
                        //   background: '#fff',
                        // }}
                        scope="row"
                      >
                        {number}
                      </TableCell>
                      <TableCell align="right">
                        <a
                          href="/"
                          // href=`https://etherscan.io/tx/${hash}`
                        >
                          {truncate(hash, 12)}
                        </a>
                      </TableCell>
                      <TableCell align="right">{truncate(from, 14)}</TableCell>
                      <TableCell align="right">
                        {truncate(transactions[0].from, 14)}
                      </TableCell>
                      <TableCell align="right">{transactions.length}</TableCell>
                      <TableCell align="right">{timestamp}</TableCell>
                      <TableCell align="right">{miner}</TableCell>
                      <TableCell align="right">{timestamp}</TableCell>
                    </TableRow>
                  ),
                )}
              </TableBodyStyled>
            </Table>
          ) : (
            <NoData>
              <NoDataTitle>No data</NoDataTitle>
            </NoData>
          )}
        </TableContainer>
      </Container>
    </Wrapper>
  );
}
