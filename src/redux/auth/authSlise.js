import { createSlice } from "@reduxjs/toolkit";
import { signup, login } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  loading: false,
  // loadingUser: false,
  error: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signup.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(login.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.token;
        state.user = payload.user;
      });
  },
});

export default authSlice.reducer;
