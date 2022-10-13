// Packages
import { createSlice } from '@reduxjs/toolkit';

// Libraries
import { advisorListFilterByKeyword } from '../libraries/Advisor';

const initData = require('./../data/data.json');

let initialState = {
  onlineOnly: false,
  searchKeyword: '',
  list: initData.data.advisorProfileCollection.items,
};

export const advisorSlice = createSlice({
  name: 'advisor',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Switch online only option
    switchOnlineOnly: state => {
      state.onlineOnly = !state.onlineOnly;
    },

    // Set search keyword
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },

    // Update list
    updateList: state => {
      state.list = advisorListFilterByKeyword(initData.data.advisorProfileCollection.items, state.searchKeyword, state.onlineOnly);
    },
  },
});

export const selectOnlineOnly = (state) => state.advisor.onlineOnly;
export const selectSearchKeyword = (state) => state.advisor.searchKeyword;
export const selectAdvisorList = (state) => state.advisor.list;

export const { switchOnlineOnly, setSearchKeyword, updateList } = advisorSlice.actions;

export default advisorSlice.reducer;