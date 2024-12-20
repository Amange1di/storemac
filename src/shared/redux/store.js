import { configureStore } from "@reduxjs/toolkit";
import { charactersReducer } from "./slices/charactersSlice";
import { characterReducer } from "./slices/characterSlice";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    character: characterReducer,
  },
});

export default store;