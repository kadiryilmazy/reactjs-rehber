import { Button, ButtonGroup, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);
    const increment = () => {
        dispatch({ type: "counter/increment" });
    };
    const decrement = () => {
        dispatch({ type: "counter/decrement" });
    };
    const incrementByValue = (value) => {
        dispatch({ type: "counter/incrementByValue", payload: value });
    };

    return (
        <>
            <Typography>{count}</Typography>
            <ButtonGroup>
                <Button
                    onClick={() => {
                        dispatch(increment());
                    }}
                >
                    Increment
                </Button>
                <Button
                    onClick={() => {
                        dispatch(decrement());
                    }}
                >
                    Decrement
                </Button>
                <Button
                    onClick={() => {
                        dispatch(incrementByValue(5));
                    }}
                >
                    Increment By Value
                </Button>
            </ButtonGroup>
        </>
    );
}
