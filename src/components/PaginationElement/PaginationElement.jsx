import React from 'react';

import Stack from '@mui/material/Stack';
import { Wrapper, PaginationStyled } from './PaginationElement.styled';
import { useDispatch, useSelector } from 'react-redux';
import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';
import { setPageOption } from 'redux/transactions/transactions-slice';

export default function PaginationElement({ isMobile }) {
  const dispatch = useDispatch();

  const currentPage = useSelector(transactionsSelectors.getCurrentPage);
  const pageItemsLimit = useSelector(transactionsSelectors.getItemsLimit);
  const totalCount = Math.ceil(
    useSelector(transactionsSelectors.getTransactionsCount) / pageItemsLimit,
  );

  const handleChangePage = (_, num) => {
    dispatch(setPageOption(num));
  };

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
