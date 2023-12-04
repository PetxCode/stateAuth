import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: "" || null,
  product: [],
  cart: [] as any,
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
      // state.cart = [];

      const check = state.cart.find((el: any) => el.id === payload.id);

      if (check) {
        check.QTY += 1;
      } else {
        state.cart.push({ ...payload, QTY: 1 });
      }
    },

    removeFromCart: (state, { payload }) => {
      // state.cart = [];

      const check = state.cart.filter((el: any) => el.id !== payload.id);
      state.cart = check;
    },

    removeCartQTY: (state, { payload }) => {
      // state.cart = [];

      const checkCart = state.cart.findIndex((el: any) => el.id === payload.id);

      if (state.cart[checkCart].QTY > 1) {
        state.cart[checkCart].QTY -= 1;
      } else if (state.cart[checkCart].QTY === 1) {
        const check = state.cart.filter((el: any) => el.id !== payload.id);
        state.cart = check;
      }
    },
  },
});

export const { changeToggle, loginUser, logOut, addProduct, addCart } =
  reduxState.actions;

export default reduxState.reducer;
