import { configureStore } from '@reduxjs/toolkit';
import { transactionsSlice } from './transactions/transactions-slice';

export const store = configureStore({
  reducer: {
    transactions: transactionsSlice.reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
