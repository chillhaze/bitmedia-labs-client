import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://bitmedia-lab.herokuapp.com/api';
// axios.defaults.baseURL = 'http://localhost:3005/api';

// use for Server side pagination
export const getTransactions = createAsyncThunk(
  'transactions/get-transactions',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions`, {
        params: { ...credentials },
      });

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getTransactionByFilter = createAsyncThunk(
  'transactions/get-transaction-search',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions/search`, {
        params: { ...credentials },
      });

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getTransactionsByBlockNumber = createAsyncThunk(
  'transactions/get-by-block-number',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions/searchByBlockNumber`, {
        params: { ...credentials },
      });

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// use for Client side pagination
// export const getTransactions = createAsyncThunk(
//   'transactions/get-transactions',
//   async () => {
//     try {
//       const { data } = await axios.get(`/transactions`);
//       console.log(data);
//       return data.data;
//     } catch (error) {
//       console.log(error.message);
//     }
//   },
// );
