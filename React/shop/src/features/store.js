import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from './categories/CategoriesSlice'

export const store = configureStore({
  reducer:{
    categories: categoriesSlice,
    //products: productsSlice,
  },
  devTools: true,
});
