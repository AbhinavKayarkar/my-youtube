import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../appSlice";
import cacheSlice from "../cacheSlice";
import chatSlice from "../chatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    chats: chatSlice,
  },
});

export default store;
