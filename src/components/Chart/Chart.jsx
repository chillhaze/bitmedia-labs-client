import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { PAGE_LIMIT } from '../../constants/pageLimit';
import * as transactionsOperations from '../../redux/transactions/transactions-operations';
import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';
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
} from './Chart.styled';
import ChartRow from 'components/ChartRow/ChartRow';

import { setPageOption } from 'redux/transactions/transactions-slice';

export default function Chart() {
  const isMobile = useMediaQuery({
    query: '(max-width: 750px)',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [pageItemsLimit] = useState(PAGE_LIMIT);

  const dispatch = useDispatch();
  const transactions = useSelector(transactionsSelectors.getTransactionsData);
  const transactionsCount = useSelector(
    transactionsSelectors.getTransactionsCount,
  );
  const isLoadingData = useSelector(
    transactionsSelectors.isLoadingTransactions,
  );
  const filterOption = useSelector(
    transactionsSelectors.getTransactionsFilterOption,
  );
  const searchQuery = useSelector(
    transactionsSelectors.getTransactionsSearchQuery,
  );

  const handleCurrentPageChange = page => {
    setCurrentPage(page);
    dispatch(setPageOption(page));
  };

  useEffect(() => {
    if (filterOption === 'blockNumber') {
      dispatch(
        transactionsOperations.getTransactionsByBlockNumber({
          filterOption,
          searchQuery,
          currentPage,
          pageItemsLimit,
        }),
      );
    } else {
      dispatch(
        transactionsOperations.getTransactions({ currentPage, pageItemsLimit }),
      );
    }
  }, [currentPage, dispatch, pageItemsLimit]);

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
                  <TableCellStyled
                    align="right"
                    style={
                      isMobile ? { minWidth: '85px' } : { minWidth: '165px' }
                    }
                  >
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
                  <TableCellStyled
                    align="right"
                    style={
                      isMobile ? { minWidth: '105px' } : { minWidth: '130px' }
                    }
                  >
                    Date
                  </TableCellStyled>
                  <TableCellStyled
                    align="right"
                    style={
                      isMobile ? { minWidth: '85px' } : { minWidth: '165px' }
                    }
                  >
                    Value
                  </TableCellStyled>
                  <TableCellStyled align="right">
                    Transaction Fee
                  </TableCellStyled>
                </TableRowStyled>
              </TableHeadStyled>
              <TableBodyStyled>
                {transactions.map((item, index) => (
                  <ChartRow
                    key={index}
                    transactions={transactions}
                    item={item}
                    isMobile={isMobile}
                  />
                ))}
              </TableBodyStyled>
            </Table>
          )}
        </TableContainer>

        {!isLoadingData && transactions.length === 0 && (
          <NoData>
            <NoDataTitle>No data</NoDataTitle>
          </NoData>
        )}
        {transactionsCount > pageItemsLimit && (
          <PaginationElement
            isMobile={isMobile}
            currentPage={currentPage}
            pageItemsLimit={pageItemsLimit}
            handleCurrentPageChange={handleCurrentPageChange}
          />
        )}
      </Container>
    </Wrapper>
  );
}
