import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slice/profileSlice";
import dataReducer from "./slice/dataSlice";
import categoryReducer from "./slice/gameCategorySlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    activeTournament: dataReducer,
    gameCategory: categoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
