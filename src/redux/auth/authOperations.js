import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const signup = createAsyncThunk("/auth/signupStatus", (newUser) => {
  return api.signupUser("users/signup", newUser);
});

const login = createAsyncThunk("/users/loginStatus", (user) => {
  console.log(user);
  return api.loginUser("/users/login", user);
});

const logout = createAsyncThunk("/users/logoutStatus", (token) => {
  return api.logoutUser("/users/logout", token);
});

const getCurrent = createAsyncThunk("/users/currentStatus", (token) => {
  return api.getCurrentUser("/users/current", token);
});

export { signup, login, logout, getCurrent };