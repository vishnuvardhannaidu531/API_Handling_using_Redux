import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slice1";   // adjust path if needed

const store = configureStore({
  reducer: {
    Slice1: slice1Reducer,
  }
});

export default store;