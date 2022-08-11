import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from 'react-toastify';

const token = {
  set(token) {
    axios.defaults.headers.common.Authrization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authrization = '';
  },
};

export const register = createAsyncThunk('/auth/register', async credentials => {
  try {
    const {data} = await axios.post(
      'https://connections-api.herokuapp.com/users/signup',
      credentials
    );
    token.set(data.token);
    return data;
  } catch (error) {
      toast.error('Register failed!!! Try again!!!')
  };
});

export const login = createAsyncThunk('/auth/login', async credentials => {
  try {
    const {data} = await axios.post(
      'https://connections-api.herokuapp.com/users/login',
      credentials
    );
    token.set(data.token);
    return data;
  } catch (error) {
      toast.error('Login failed!!! Try again!!!')
  };
});

export const logout = createAsyncThunk('/auth/logout', async credentials => {
  try {
    const {data} = await axios.post(
      'https://connections-api.herokuapp.com/users/logout',
      credentials
    );
    token.unset();
    return data;
  } catch (error) {
      toast.error('Logout failed!!! Try again!!!')
  };
});

export const fetchCurrentUser = createAsyncThunk('/auth/refresh',
async ( _, {getState, rejectWithValue}) => {
  const state = getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) return rejectWithValue();
  token.set(persistedToken);
  try {
    const {data} = await axios.get(
      'https://connections-api.herokuapp.com/users/current'
    );
    return data;
  } catch (error) {
      toast.error('Refresh failed!!! Try again!!!')
  };
});
