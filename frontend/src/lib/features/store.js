import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default storage (localStorage)
import studentReducer from "./slices/studentSlice";

// Persist config
const persistConfig = {
  key: "root",
  storage,
};
const reducers = combineReducers({
  students: studentReducer,
});
const persistedReducer = persistReducer(persistConfig, reducers);

// Create Redux store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
});

// Create persistor
export const persistor = persistStore(store);

export default store;
