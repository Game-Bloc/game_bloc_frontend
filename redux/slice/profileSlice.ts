import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  username: string | undefined;
}

const initialState: ProfileState = {
  username: "",
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
    },
  },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
