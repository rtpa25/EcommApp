/** @format */

import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import {
  getSelfHelper,
  loginFailure,
  loginStart,
  loginSucess,
} from '../slices/userSlice';
import { AppDispatch } from '../store';

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (
  dispatch: AppDispatch,
  user: { email: string; password: string },
  navigate: NavigateFunction
) => {
  console.log(API_URL);

  dispatch(loginStart());
  try {
    const res = await axios.post(`${API_URL}/login`, {
      email: user.email,
      password: user.password,
    });
    dispatch(loginSucess({ user: res.data.user, token: res.data.token }));
    navigate('/products');
    return res;
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const signup = async (
  dispatch: AppDispatch,
  user: { email: string; password: string; username: string }
) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${API_URL}/signup`, {
      username: user.username,
      email: user.email,
      password: user.password,
    });
    dispatch(loginSucess({ user: res.data.user, token: res.data.token }));
    return res;
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const getUserDetails = async (dispatch: AppDispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.get(`${API_URL}/getSelf`, {
      withCredentials: true,
    });
    dispatch(getSelfHelper({ user: res.data.userDetails }));
    return res;
  } catch (error) {
    dispatch(loginFailure());
  }
};
