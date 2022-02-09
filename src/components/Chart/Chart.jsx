import Container from 'components/Container/Container';
import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import LoaderElement from 'components/LoaderElement/LoaderElement';
import { useMediaQuery } from 'react-responsive';
import ChartRow from '../ChartRow/ChartRow';
import * as transactionsOperations from '../../redux/transactions/transactions-operations';
import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';
import PaginationElement from 'components/PaginationElement/PaginationElement';
import {
  Wrapper,
  TableHeadStyled,
  TableRowStyled,
  TableBodyStyled,
  NoData,
  NoDataTitle,
  TableCellStyled,
} from './Chart.styled';

export default function Chart() {
  const isMobile = useMediaQuery({
    query: '(max-width: 750px)',
  });

  const dispatch = useDispatch();
  const currentPage = useSelector(transactionsSelectors.getCurrentPage);
  const pageItemsLimit = useSelector(transactionsSelectors.getItemsLimit);

  useEffect(() => {
    // use for Server side pagination
    // dispatch(transactionsOperations.getTransactions({ page, limit }));
    dispatch(transactionsOperations.getTransactions());
  }, [dispatch]);

  const transactions = useSelector(transactionsSelectors.getTransactionsData);
  const isLoadingData = useSelector(
    transactionsSelectors.isLoadingTransactions,
  );

  const lastTransaction = currentPage * pageItemsLimit;
  const firstTransaction = lastTransaction - pageItemsLimit;
  const paginatedTransactions = transactions.slice(
    firstTransaction,
    lastTransaction,
  );

  return (
    <Wrapper>
      <Container>
        <TableContainer component={Paper}>
          {isLoadingData && <LoaderElement />}
          {!isLoadingData && transactions && (
            <Table size="small" aria-label="a dense table">
              <TableHeadStyled>
                <TableRowStyled>
                  <TableCellStyled>Block number</TableCellStyled>
                  <TableCellStyled align="right" style={{ minWidth: '165px' }}>
                    Transaction ID
                  </TableCellStyled>
                  <TableCellStyled align="right">
                    Sender address
                  </TableCellStyled>
                  <TableCellStyled align="right">
                    Recipient's address
                  </TableCellStyled>
                  <TableCellStyled align="right">
                    Block confirmations
                  </TableCellStyled>
                  <TableCellStyled align="right" style={{ minWidth: '130px' }}>
                    Date
                  </TableCellStyled>
                  <TableCellStyled align="right" style={{ minWidth: '165px' }}>
                    Value
                  </TableCellStyled>
                  <TableCellStyled align="right">
                    Transaction Fee
                  </TableCellStyled>
                </TableRowStyled>
              </TableHeadStyled>
              <TableBodyStyled>
                {paginatedTransactions.map((item, index) => (
                  <ChartRow
                    key={index}
                    transactions={paginatedTransactions}
                    item={item}
                    isMobile={isMobile}
                  />
                ))}
              </TableBodyStyled>
            </Table>
          )}
          {!isLoadingData && !transactions && (
            <NoData>
              <NoDataTitle>No data</NoDataTitle>
            </NoData>
          )}
        </TableContainer>

        <PaginationElement isMobile={isMobile} />
      </Container>
    </Wrapper>
  );
}
