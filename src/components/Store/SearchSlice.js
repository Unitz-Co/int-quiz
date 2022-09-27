import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchItem: "" };

const SearchSlice = createSlice({
  name: "search-slice",
  initialState,
  reducers: {
    searchInput(state, actions) {
      state.searchItem = actions.payload;
    },
  },
});

export const searchSliceAction = SearchSlice.actions;

export default SearchSlice;
