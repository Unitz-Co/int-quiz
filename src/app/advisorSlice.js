// Packages
import { createSlice } from '@reduxjs/toolkit';

// Libraries
import { advisorListFilterByKeyword } from '../libraries/Advisor';

const initData = require('./../data/data.json');

let initialState = {
  searchKeyword: '',
  list: initData.data.advisorProfileCollection.items,
};

export const advisorSlice = createSlice({
  name: 'advisor',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Set search keyword
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;

      if (action.payload) {
        state.list = advisorListFilterByKeyword(initData.data.advisorProfileCollection.items, action.payload);
      } else {
        state.list = initData.data.advisorProfileCollection.items;
      }
    },
  },
});

export const selectSearchKeyword = (state) => state.advisor.searchKeyword;
export const selectAdvisorList = (state) => state.advisor.list;

export const { setSearchKeyword } = advisorSlice.actions;

export default advisorSlice.reducer;