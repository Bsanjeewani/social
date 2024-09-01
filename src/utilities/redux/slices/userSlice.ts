import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface UserState {
  username: string;
  avatar: string;
}

const initialState: UserState = {
  username: "sanjeewani",
  avatar: "https://docs.material-tailwind.com/img/face-2.jpg",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user;
