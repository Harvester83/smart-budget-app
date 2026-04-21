// transactionsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "./types";

const initialState = {
  transactions: [] as Transaction[],
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<Transaction>) {
      state.transactions.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;