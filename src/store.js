import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./components/userSlice";
const store = configureStore({
  reducer: {
    User: userSlice,
  },
});

export default store;
