import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface UserState {
  displayName: any;
  soconId: any;
  username: string;
  avatar: string;
}

const initialState: UserState = {
  username: "sanjeewani",
  avatar:
    "https://static.vecteezy.com/system/resources/previews/014/212/681/original/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions-for-website-and-mobile-app-design-illustration-on-a-white-isolated-background-vector.jpg",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user;
