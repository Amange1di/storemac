import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { useSelector } from "react-redux";
import service from "../../api/service";



// export const fetchCharacter = createAsyncThunk(
//   "character/fetchCharacter",
//   async (id) => {
//     const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
//     return data;
//   }
// );

export const fetchCharacter = createAsyncThunk(
  "characters/fetchCharacter",
  async (id) => {
    const { data } = await service.getCharacterById(id);
    console.log(data, "эгер тура чыкса жакшы болот ")

    return data;
  }
);
const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: {},
    isLoading: false, 
    isError: false, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchCharacter.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCharacter.fulfilled, (state, { payload }) => {
        state.character = payload;
        state.isLoading = false;
      })
      .addCase(fetchCharacter.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const useCharacter = () => useSelector((state) => state.character);
export const characterReducer = characterSlice.reducer;
