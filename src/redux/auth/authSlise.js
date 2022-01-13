import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, getCurrent } from "./authOperations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  loading: false,
  isloggedInUser: false,
  isFetchCurrentUser: false,
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
        state.isloggedInUser = true;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(login.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token = payload.token;
        state.user = payload.user;
        state.isloggedInUser = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(logout.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isloggedInUser = false;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(getCurrent.pending, (state, { payload }) => {
        state.isFetchCurrentUser = true;
      })
      .addCase(getCurrent.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchCurrentUser = false;
        state.isloggedInUser = true;
      })
      .addCase(getCurrent.rejected, (state, { payload }) => {
        state.isFetchCurrentUser = false;
      });
  },
});

export default authSlice.reducer;
