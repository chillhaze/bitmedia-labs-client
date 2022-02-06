import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://kapusta-app-teamproject.herokuapp.com/api";

export const getTransactions = createAsyncThunk(
  "transactions/get-transactions",
  async ({ type, period }) => {
    try {
      const { data } = await axios.get(
        `/transactions?type=${type}&period=${period}`
      );
      console.log(data);
      return data.data.result;
    } catch (error) {
      console.log(error.message);
    }
  }
);
