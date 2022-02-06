import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations.js';

const initialState = {
  transactionsData: [],
  isLoadingTransactions: false,
  filterOption: '',
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setFilterOption: (state, action) => {
      state.filterOption = action.payload;
    },
  },
  extraReducers: {
    //------------------ Get Transactions Data
    [transactionsOperations.getTransactions.pending](state, _) {
      state.isLoadingTransactions = true;
    },
    [transactionsOperations.getTransactions.fulfilled](state, action) {
      state.transactionsData = action.payload;
      state.isLoadingTransactions = false;
    },
  },
});

export const { setFilterOption } = transactionsSlice.actions;
