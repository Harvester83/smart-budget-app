// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // сюда добавим reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;