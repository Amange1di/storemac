import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import service from "../../api/service";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const { data } = await service.getAllCharacters();
    console.log(data, "эгер тура чыкса жакшы болот ")

    return data;
  }
);


const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    results: [],
    isLoading: false,
    isError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.results = action.payload.results;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      })
     
  },
});

export const charactersReducer = charactersSlice.reducer;
