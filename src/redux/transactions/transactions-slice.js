import { createSlice } from '@reduxjs/toolkit';
import * as transactionsOperations from './transactions-operations.js';

const initialState = {
  transactionsData: [],
  count: 0,
  isLoadingTransactions: false,
  currentPage: 1,
  pageItemsLimit: 14,
  filterOption: 'adress',
  searchQuery: '',
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setFilterOption: (state, action) => {
      state.filterOption = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setPageOption: (state, action) => {
      state.currentPage = action.payload;
    },
    setLimitOption: (state, action) => {
      state.pageItemsLimit = action.payload;
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
      state.isLoadingTransactions = false;
    },
    [transactionsOperations.getTransactions.rejected](state, action) {
      state.transactionsData = [];
      state.isLoadingTransactions = false;
    },
    //------------------ Get Transactions Data by Search
    [transactionsOperations.getTransactions.pending](state, _) {
      state.isLoadingTransactions = true;
    },
    [transactionsOperations.getTransactionByFilter.fulfilled](state, action) {
      state.transactionsData = action.payload.result;
      state.count = action.payload.count;
      state.isLoadingTransactions = false;
    },
    [transactionsOperations.getTransactionByFilter.rejected](state, action) {
      state.transactionsData = [];
      state.count = 0;
      state.isLoadingTransactions = false;
    },
    //------------------ Get Transactions Data by Block Number
    [transactionsOperations.getTransactionsByBlockNumber.pending](state, _) {
      state.isLoadingTransactions = true;
    },
    [transactionsOperations.getTransactionsByBlockNumber.fulfilled](
      state,
      action,
    ) {
      state.transactionsData = action.payload.result;
      state.count = action.payload.count;
      state.isLoadingTransactions = false;
    },
    [transactionsOperations.getTransactionsByBlockNumber.rejected](
      state,
      action,
    ) {
      state.transactionsData = [];
      state.isLoadingTransactions = false;
    },
  },
});

export const {
  setFilterOption,
  setSearchQuery,
  setPageOption,
  setLimitOption,
} = transactionsSlice.actions;
