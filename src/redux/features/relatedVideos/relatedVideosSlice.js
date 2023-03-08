import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { relatedVideosApi } from "./relatedVideosApi";
const initialState = {
  isLoading: false,
  isError: false,
  relatedVideos: [],
  error: "",
};
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ id, tags }) => {
    const fetchData = await relatedVideosApi({ id, tags });
    return fetchData;
  }
);
export const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error.message;
      });
  },
});
export default relatedVideosSlice.reducer;
