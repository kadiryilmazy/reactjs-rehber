import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: null,
};

export const cartSlicer = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cart = action.payload;
        },
    },
});

export const { setCart } = cartSlicer.actions;
