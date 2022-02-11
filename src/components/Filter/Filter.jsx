import React, { useState } from 'react';
import Container from 'components/Container/Container';
import {
  Wrapper,
  SearchWrapper,
  PaperStyled,
  SelectStyled,
  InputBaseStyled,
  ButtonStyled,
} from './Filter.styled';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilterOption,
  setSearchQuery as setQuery,
} from 'redux/transactions/transactions-slice';
import * as transactionsOperations from '../../redux/transactions/transactions-operations';
import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';

export default function Filter() {
  const [filter, setFilter] = useState('adress');
  const [searchQuery, setSearchQuery] = useState('');

  const defaultValue = 'adress';
  const dispatch = useDispatch();

  const currentPage = useSelector(transactionsSelectors.getCurrentPage);
  const pageItemsLimit = useSelector(transactionsSelectors.getItemsLimit);

  const handleSearchChange = e => {
    setSearchQuery(e.target.value.trim());
    dispatch(setQuery(e.target.value.trim()));
  };

  const handleFilterOptionChange = e => {
    setFilter(e.target.value);
    dispatch(setFilterOption(e.target.value));
  };

  const handleSubmit = () => {
    if (filter === 'blockNumber' && searchQuery) {
      console.log('sent by block #');
      dispatch(
        transactionsOperations.getTransactionsByBlockNumber({
          filter,
          searchQuery,
          currentPage,
          pageItemsLimit,
        }),
      );
    } else if (filter !== 'blockNumber' && searchQuery) {
      dispatch(
        transactionsOperations.getTransactionByFilter({
          filter,
          searchQuery,
          currentPage,
          pageItemsLimit,
        }),
      );

      setSearchQuery('');
    }

    return;
  };

  return (
    <Wrapper>
      <Container>
        <SearchWrapper>
          <PaperStyled component="form">
            <InputBaseStyled
              value={searchQuery}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <SelectStyled
              variant="standard"
              onChange={handleFilterOptionChange}
              defaultValue={defaultValue}
              disableUnderline
              IconComponent={KeyboardArrowDownIcon}
              value={filter}
            >
              <MenuItem value={'adress'}>Adress</MenuItem>
              <MenuItem value={'transactionId'}>Transaction ID</MenuItem>
              <MenuItem value={'blockNumber'}>Block Number</MenuItem>
            </SelectStyled>
          </PaperStyled>

          <ButtonStyled
            type="submit"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={handleSubmit}
          >
            <SearchIcon />
          </ButtonStyled>
        </SearchWrapper>
      </Container>
    </Wrapper>
  );
}
