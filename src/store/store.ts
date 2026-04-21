import authReducer from "@/features/auth/model/authSlice";
import transactionsReducer from "@/features/transactions/model/transactionsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;