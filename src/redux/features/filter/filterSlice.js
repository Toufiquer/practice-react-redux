import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  searchByTags: [],
  searchByText: "",
  error: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addTag: (state, action) => {
      state.searchByTags.push(action.payload);
    },
    removeTag: (state, action) => {
      const index = state.searchByTags.indexOf(action.payload);
      state.searchByTags.splice(index, 1);
    },
    updateSearch: (state, action) => {
      state.searchByText = action.payload;
    },
  },
});
export default searchSlice.reducer;
export const { addTag, removeTag, updateSearch } = searchSlice.actions;
