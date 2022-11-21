import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import postSlice from "./post";
import userSlice from "./user";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user: userSlice.reducer,
        post: postSlice.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
