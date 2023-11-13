import { configureStore } from "@reduxjs/toolkit";
import marketReducer from "./dMarketPlaceSlice";

export const store = configureStore({
  reducer: {
    market: marketReducer,
  },
});
