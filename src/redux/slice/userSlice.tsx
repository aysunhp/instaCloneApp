import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  isLogin: boolean;
}

const initialState: UserState = {
  isLogin: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
