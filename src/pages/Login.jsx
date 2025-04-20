import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, colors, Container, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
    const { register, handleSubmit } = useForm();
    const [values, setValues] = useState({
        username: "sadikturan",
        password: "123456",
    });

    function handleForm(data, e) {
        e.preventDefault();
        console.log(data);
    }

    return (
        <Container maxWidth="xs">
            <Paper
                sx={{ padding: 2 }}
                elevation={3}
            >
                <Avatar sx={{ mx: "auto", mb: 2, color: "secondary.main" }}>
                    <LockOutlined />
                </Avatar>
                <Typography
                    component="h1"
                    variant="h5"
                    sx={{ textAlign: "center", mb: 2 }}
                >
                    Login
                </Typography>
                <Box
                    onSubmit={handleSubmit(handleForm)}
                    component="form"
                    sx={{ mb: 2 }}
                >
                    <TextField
                        {...register("username")}
                        label="Enter username"
                        size="small"
                        fullWidth
                        required
                        autoFocus
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        {...register("password")}
                        type="password"
                        label="Enter password"
                        size="small"
                        fullWidth
                        required
                        sx={{ mb: 2 }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 1 }}
                        color="secondary"
                    >
                        Submit
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
