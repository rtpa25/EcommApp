/** @format */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  products: any[];
  quantity: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (
      state,
      action: PayloadAction<{ product: any; price: number; quantity: number }>
    ) => {
      state.quantity += 1;
      const { product, price, quantity } = action.payload;
      state.products.push(product);
      state.total += price * quantity;
    },
  },
});

export const { addProduct } = CartSlice.actions;
export default CartSlice.reducer;
