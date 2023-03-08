import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { videoApi } from "./videoApi";
const initialState = {
  isLoading: false,
  isError: false,
  video: {},
  error: "",
};
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const fetchData = await videoApi(id);
  return fetchData;
});
export const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error.message;
      });
  },
});
export default videoSlice.reducer;
