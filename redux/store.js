import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import applicationReducer from "./slice";

const persistConfig = {
  key: "root", // The key for the root of your state in storage
  storage, // Use the chosen storage engine
};

const persistedReducer = persistReducer(persistConfig, applicationReducer);

export const store = configureStore({
  reducer: {
    appReducer: persistedReducer, // Use the persisted reducer
  },
});

export const persistor = persistStore(store);
