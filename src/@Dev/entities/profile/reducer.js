import { handleActions } from "redux-actions";

export const initialState = {
  email: "john.doe@example.co",
};

export const ProfileReducer = handleActions({}, initialState);
