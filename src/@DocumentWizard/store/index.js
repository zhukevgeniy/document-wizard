import { createStoreEnvironment } from "libjs-pdcore/store";

const {
  StoreProvider,
  connectToStore,
  injectReducer,
  injectMultipleReducers,
  injectSaga,
  injectMultipleSagas,
  createStore,
  StoreContext,
} = createStoreEnvironment();

export {
  injectReducer,
  injectMultipleReducers,
  injectSaga,
  injectMultipleSagas,
  StoreProvider,
  connectToStore,
  StoreContext,
};
