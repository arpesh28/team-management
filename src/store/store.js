import { configureStore } from "@reduxjs/toolkit";
import teamMembersReducer from "./teamMembers";

export default configureStore({
  reducer: {
    teamMembersReducer,
  },
});
