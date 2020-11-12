import { combineReducers } from "redux";
import { ProfileReducer } from "@Dev/entities/profile/reducer";

export const RootReducer = combineReducers({
  profile: ProfileReducer,
});
