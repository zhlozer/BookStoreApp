import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ProductState = {
  value: number;
};

const initialState: ProductState = {
  value: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
