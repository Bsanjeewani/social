import { configureStore } from "@reduxjs/toolkit";
import { postReducer, userReducer } from "../slices";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
