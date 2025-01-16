import { createSlice } from "@reduxjs/toolkit";
import { COUNT_VALUE } from "./constants";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    liveChats: [],
  },
  reducers: {
    addLiveChats: (state, action) => {
      state.liveChats.splice(COUNT_VALUE, 1);
      state.liveChats.unshift(action.payload);
    },
  },
});

export const { addLiveChats } = chatSlice.actions;
export default chatSlice.reducer;
