import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const signup = createAsyncThunk("/auth/signupStatus", (newUser) => {
  return api.signupUser("users/signup", newUser);
});

const login = createAsyncThunk("/users/loginStatus", (user) => {
  return api.loginUser("users/login", user);
});

const logout = createAsyncThunk("/users/logoutStatus", (token) => {

  return api.logoutUser("users/logout", token);
});

const getCurrent = createAsyncThunk("/users/currentStatus", (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;

  if (!persistToken) thunkAPI.rejectWithValue();
  return api.getCurrentUser("users/current", persistToken);
});

export { signup, login, logout, getCurrent };