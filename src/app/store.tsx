// @ts-ignore
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import flashReducer from "./flash/flashSlice";

export const store = configureStore({
  reducer: {
    flash: flashReducer,
  },
});

export type FlashDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type FlashThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
