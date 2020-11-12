import { createStore } from "redux";
import { RootReducer } from "../entities";

export const devStore = createStore(RootReducer, {});
