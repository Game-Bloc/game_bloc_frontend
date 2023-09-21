import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  username: string | undefined;
  userID: string | undefined;
}

const initialState: ProfileState = {
  username: "",
  userID: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (
      state: ProfileState,
      { payload }: PayloadAction<ProfileState>
    ) => {
      state.username = payload.username;
      state.userID = payload.userID;
    },
  },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
