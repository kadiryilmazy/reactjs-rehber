import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../pages/counter/counterSlice.js";

if (!counterSlice || !counterSlice.reducer) {
    throw new Error("counterSlice is not properly defined or missing a reducer property.");
}

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});
