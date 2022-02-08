import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://bitmedia-lab.herokuapp.com/api';

export const getTransactions = createAsyncThunk(
  'transactions/get-transactions',
  async () => {
    try {
      const { data } = await axios.get(`/`);
      console.log(data);
      return data.data.result;
    } catch (error) {
      console.log(error.message);
    }
  },
);
