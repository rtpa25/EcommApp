/** @format */

import axios from 'axios';
import {
  loadingFailed,
  loadingStart,
  loadingsucess,
  updateProducts,
  updateQuantity,
  updateTotal,
} from '../slices/cartSlice';
import { AppDispatch } from '../store';

export const fetchCart = async (dispatch: AppDispatch) => {
  dispatch(loadingStart());
  try {
    const res = await axios.get(
      'http://localhost:5000/api/v1/getSelfCart',

      { withCredentials: true }
    );
    const cart = res.data.cart;
    const cartQuantity = cart.length;
    dispatch(updateQuantity({ quantity: cartQuantity }));
    dispatch(updateProducts({ cartItem: cart }));
    let total = 0;
    for (let i = 0; i < cartQuantity; i++) {
      let itemQuantity = cart[i].quantity;
      let price = cart[i].product.price;
      total += itemQuantity * price;
    }
    dispatch(updateTotal({ total: total }));
    dispatch(loadingsucess());
  } catch (error) {
    dispatch(loadingFailed());
  }
};

export const updateCart = async (
  dispatch: AppDispatch,
  cartItemId: string,
  productId: string,
  newQuantity: number
) => {
  dispatch(loadingStart());
  try {
    await axios.put(`http://localhost:5000/api/v1/updateCart/${cartItemId}`, {
      product: productId,
      quantity: newQuantity,
      withCredentials: true,
    });
    dispatch(loadingsucess());
  } catch (error) {
    dispatch(loadingFailed());
  }
};

export const deleteCartItem = async (
  dispatch: AppDispatch,
  cartItemId: string
) => {
  dispatch(loadingStart());
  try {
    await axios.delete(
      `http://localhost:5000/api/v1/deleteCart/${cartItemId}`,
      {
        withCredentials: true,
      }
    );
    dispatch(loadingsucess());
  } catch (error) {
    dispatch(loadingFailed());
  }
};
