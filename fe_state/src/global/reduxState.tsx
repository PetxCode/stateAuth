import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: "" || null,
};

const reduxState = createSlice({
  name: "reduxState",
  initialState,
  reducers: {
    changeToggle: (state, { payload }) => {
      state.toggle = payload;
    },

    loginUser: (state, { payload }) => {
      state.user = payload;
    },

    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { changeToggle, loginUser, logOut } = reduxState.actions;

export default reduxState.reducer;
