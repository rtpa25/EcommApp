/** @format */

import axios from 'axios';
import { loginFailure, loginStart, loginSucess } from '../slices/userSlice';
import { AppDispatch } from '../store';

export const login = async (dispatch: AppDispatch, user: any) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:5000/api/v1/login', user);
    dispatch(loginSucess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
