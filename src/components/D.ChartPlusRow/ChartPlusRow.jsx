import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import * as transactionsOperations from '../../redux/transactions/transactions-operations';
import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';
import { setPageOption } from 'redux/transactions/transactions-slice';
import truncateString from 'utils/truncateString';
import Container from 'components/Container/Container';
import LoaderElement from 'components/LoaderElement/LoaderElement';
import PaginationElement from 'components/PaginationElement/PaginationElement';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import {
  Wrapper,
  TableHeadStyled,
  TableRowStyled,
  TableBodyStyled,
  NoData,
  NoDataTitle,
  TableCellStyled,
} from './ChartPlusRow.styled';

export default function ChartPlusRow() {
  const isMobile = useMediaQuery({
    query: '(max-width: 750px)',
  });

  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelectors.getTransactionsData);
  const currentPage = useSelector(transactionsSelectors.getCurrentPage);
  const pageItemsLimit = useSelector(transactionsSelectors.getItemsLimit);
  const isLoadingData = useSelector(
    transactionsSelectors.isLoadingTransactions,
  );

  useEffect(() => {
    dispatch(
      transactionsOperations.getTransactions({ currentPage, pageItemsLimit }),
    );
  }, [currentPage, dispatch, pageItemsLimit]);

  const lastTransaction = currentPage * pageItemsLimit;
  const firstTransaction = lastTransaction - pageItemsLimit;
  // const paginatedTransactions = transactions.slice(
  //   firstTransaction,
  //   lastTransaction,
  // );

  // const handleChangePage = (_, num) => {
  //   dispatch(setPageOption(num));
  // };

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
                {transactions.map(item => (
                  <TableRowStyled
                    key={item.transactionId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCellStyled scope="row">
                      {item.blockNumber}
                    </TableCellStyled>
                    <TableCellStyled align="right">
                      <a href={`https://etherscan.io/tx/${item.transactionId}`}>
                        {truncateString(item.transactionId, 12, isMobile)}
                      </a>
                    </TableCellStyled>
                    <TableCellStyled align="right">
                      {truncateString(item.senderAdress, 14, isMobile)}
                    </TableCellStyled>
                    <TableCellStyled align="right">
                      {truncateString(item.recipientsAdress, 14, isMobile)}
                    </TableCellStyled>
                    <TableCellStyled align="right">
                      {transactions.length}
                    </TableCellStyled>
                    <TableCellStyled align="right">{item.date}</TableCellStyled>
                    <TableCellStyled align="right">
                      {item.value}
                    </TableCellStyled>
                    <TableCellStyled align="right">
                      {item.transactionFee}
                    </TableCellStyled>
                  </TableRowStyled>
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

        <PaginationElement
          isMobile={isMobile}
          // handleChangePage={handleChangePage}
        />
      </Container>
    </Wrapper>
  );
}
