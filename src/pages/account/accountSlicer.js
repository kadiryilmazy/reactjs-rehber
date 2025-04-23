import { createSlice } from "@reduxjs/toolkit";
import { router } from "../../App";

const initialState = {
    user: null,
};

export const accountSlicer = createSlice({
    name: "account",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logOut: (state) => {
            state.user = null;
            localStorage.removeItem("user");
            router.navigate("/login");
        },
    },
});

export const { setUser, logOut } = accountSlicer.actions;
