// @ts-nocheck
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AnimationState {
  flashError: any;
}

const initialState: AnimationState = {
  flashError: null,
};

export const animationSlice = createSlice({
  name: "flash",
  initialState,
  reducers: {
    setFlashError: (state, action: PayloadAction<any>) => {
      state.flashError = action.payload;
    },
  },
});

export const { setFlashError } = animationSlice.actions;
export default animationSlice.reducer;
