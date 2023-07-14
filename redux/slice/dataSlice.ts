import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TournamentType = {
  owner_id: string;
  status: string;
  total_prize: string;
  tournament_id_hash: string;
  user: [];
};

const initialState: TournamentType[] = [];

const dataSlice = createSlice({
  name: "activeTournament",
  initialState: initialState,
  reducers: {
    addToActiveTournament: (
      state,
      { payload }: PayloadAction<TournamentType>
    ) => {
      state.push(payload);
    },
    clearTournaments: () => {
      return initialState;
    },
  },
});

export const { addToActiveTournament, clearTournaments } = dataSlice.actions;
export default dataSlice.reducer;
