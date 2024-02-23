import { createSlice } from "@reduxjs/toolkit";

const OrganiseSlice = createSlice({
  name: "organise",
  initialState: false,
  reducers: {
    organiseUser: (state, actions) => (
      state = actions.payload
    ),
  },
});

export default OrganiseSlice.reducer;
export const { organiseUser } = OrganiseSlice.actions;
