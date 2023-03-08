import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customApi } from "../../../api/customApi";
const initialState = {
  isLoading: false,
  isError: false,
  videos: [],
  error: "",
};
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const fetchData = await customApi("/videos");
  return fetchData.data;
});
export const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = action.error.message;
      });
  },
});
export default videosSlice.reducer;
