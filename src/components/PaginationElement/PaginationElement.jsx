import React from 'react';
import Stack from '@mui/material/Stack';
import { Wrapper, PaginationStyled } from './PaginationElement.styled';
import { useSelector } from 'react-redux';
import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';

export default function PaginationElement({
  isMobile,
  currentPage,
  pageItemsLimit,
  handleCurrentPageChange,
}) {
  const handleChangePage = (_, num) => {
    // dispatch(setPageOption(num));
    handleCurrentPageChange(num);
  };

  const totalCount = Math.ceil(
    useSelector(transactionsSelectors.getTransactionsCount) / pageItemsLimit,
  );

  return (
    <Wrapper>
      <Stack spacing={2}>
        <PaginationStyled
          size={isMobile ? 'small' : 'large'}
          // size={'large'}
          count={totalCount}
          variant="outlined"
          shape="rounded"
          defaultPage={1}
          onChange={handleChangePage}
          page={currentPage}
          color={currentPage ? 'primary' : 'secondary'}
        />
      </Stack>
    </Wrapper>
  );
}
