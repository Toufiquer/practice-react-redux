import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { tagsApi } from "./tagsApi";
const initialState = {
  isLoading: false,
  isError: false,
  tags: [],
  error: "",
};
export const tagsFetch = createAsyncThunk("tags/tagsFetch", async () => {
  const fetchData = await tagsApi();
  return fetchData;
});
export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(tagsFetch.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(tagsFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.tags = action.payload;
      })
      .addCase(tagsFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error.message;
      });
  },
});
export default tagsSlice.reducer;
