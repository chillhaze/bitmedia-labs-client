import React, { useEffect, useState } from 'react';
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
import { setFilterOption } from 'redux/transactions/transactions-slice';

export default function Filter() {
  const [filter, setFilter] = useState(
    useSelector(({ transactions }) => transactions.filterOption),
  );

  const defaultValue = 'adress';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilterOption(filter));
  }, [dispatch, filter]);

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const handleSubmit = event => {
    return;
  };

  return (
    <Wrapper>
      <Container>
        <SearchWrapper>
          <PaperStyled component="form">
            <InputBaseStyled
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search..."
              inputProps={{ 'aria-label': 'search' }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <SelectStyled
              variant="standard"
              onChange={handleChange}
              defaultValue={defaultValue}
              disableUnderline
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value={'adress'}>Adress</MenuItem>
              <MenuItem value={'id'}>Transaction ID</MenuItem>
              <MenuItem value={'blockNumber'}>Block Number</MenuItem>
            </SelectStyled>
          </PaperStyled>

          <ButtonStyled
            type="submit"
            sx={{ p: '10px' }}
            aria-label="search"
            onSubmit={handleSubmit}
          >
            <SearchIcon />
          </ButtonStyled>
        </SearchWrapper>
      </Container>
    </Wrapper>
  );
}
