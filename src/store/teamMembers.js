import { createSlice } from "@reduxjs/toolkit";

export const teamMemberSlice = createSlice({
  name: "teamMembers",
  initialState: {
    teamMembers: [],
  },
  reducers: {
    loadTeamMembers: (state, action) => {
      state.teamMembers = action.payload;
    },
  },
});

// this is for dispatch
export const { loadTeamMembers } = teamMemberSlice.actions;

// this is for configureStore
export default teamMemberSlice.reducer;
