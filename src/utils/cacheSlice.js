import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {},
  reducers: {
    addToCache: (state, action) => {
      state = Object.assign(state, action.payload);
      // state = {...state, ...action.payload};
    },
  },
});

export const { addToCache } = cacheSlice.actions;

export default cacheSlice.reducer;
