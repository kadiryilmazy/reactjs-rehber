import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../pages/counter/counterSlice.js";
import { cartSlicer } from "../pages/cart/cartSlicer.js";

if (!counterSlice || !counterSlice.reducer) {
    throw new Error("counterSlice is not properly defined or missing a reducer property.");
}

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        cart: cartSlicer.reducer,
        catalog: cartSlicer.reducer,
    },
});
