import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: "" || null,
  product: [],
  cart: [],
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

    addProduct: (state, { payload }) => {
      state.product = payload;
    },

    addCart: (state, { payload }) => {
      // const check: any = state.cart.some((el: any) => el.id === payload.id);

      console.log(payload);
      console.log(state.cart);
      // if (check > 0) {
      //   state.cart[check].QTY += 1;
      //   console.log(check);
      // } else {
      //   const addQTY = {
      //     payload,
      //     QTY: 1,
      //   };

      //   state.cart.push(addQTY);
      // }
    },
  },
});

export const { changeToggle, loginUser, logOut, addProduct, addCart } =
  reduxState.actions;

export default reduxState.reducer;
