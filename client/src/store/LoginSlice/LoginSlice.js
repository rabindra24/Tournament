import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    loginUser: (state, actions) => (
      state = actions.payload
    ),
  },
});

export default LoginSlice.reducer;
export const { loginUser } = LoginSlice.actions;
