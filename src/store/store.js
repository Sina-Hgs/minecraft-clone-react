import { configureStore } from "@reduxjs/toolkit";
import cubeReducer from "./cubeSlice";

export default configureStore({
  reducer: {
    cube: cubeReducer,
  },
});
