import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://bitmedia-lab.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:3000/api';

export const getTransactions = createAsyncThunk(
  'transactions/get-transactions',
  async () => {
    try {
      const { data } = await axios.get(`/transactions`);
      console.log(data);
      return data.data;
    } catch (error) {
      console.log(error.message);
    }
  },
);

// use for Server side pagination
// export const getTransactions = createAsyncThunk(
//   'transactions/get-transactions',
//   async credentials => {
//     try {
//       const { data } = await axios.get(`/transactions`, credentials);
//       console.log(data);
//       return data.data;
//     } catch (error) {
//       console.log(error.message);
//     }
//   },
// );
