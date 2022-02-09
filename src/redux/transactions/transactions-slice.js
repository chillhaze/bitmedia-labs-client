import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations.js';

const initialState = {
  transactionsData: [],
  count: 0,
  isLoadingTransactions: false,
  filterOption: '',
  currentPage: 1,
  itemsLimit: 14,
  timestamp: null,
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setFilterOption: (state, action) => {
      state.filterOption = action.payload;
    },
    setPageOption: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimitOption: (state, action) => {
      state.itemsLimit = action.payload;
    },
  },
  extraReducers: {
    //------------------ Get Transactions Data
    [transactionsOperations.getTransactions.pending](state, _) {
      state.isLoadingTransactions = true;
    },
    [transactionsOperations.getTransactions.fulfilled](state, action) {
      state.transactionsData = action.payload.result;
      state.count = action.payload.count;
      state.timestamp = action.payload.timestamp;
      state.isLoadingTransactions = false;
    },
    [transactionsOperations.getTransactions.rejected](state, action) {
      state.transactionsData = [];
      state.isLoadingTransactions = false;
    },
  },
});

export const { setFilterOption, setPageOption, setLimitOption } =
  transactionsSlice.actions;
