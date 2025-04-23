import { LockOutlined } from "@mui/icons-material";
import requests from "../../api/apiClient";

import { Avatar, Box, Button, CircularProgress, Container, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "./accountSlicer";

export default function RegisterPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.account);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
    });
    function handleForm(data, e) {
        dispatch(registerUser(data));
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
                    Register
                </Typography>
                <Box
                    onSubmit={handleSubmit(handleForm)}
                    component="form"
                    noValidate
                    sx={{ mb: 2 }}
                >
                    <TextField
                        {...register("username", {
                            required: "Kullanıcı adı zorunludur.",
                            minLength: { value: 3, message: "En az 3 karakter girin." },
                            maxLength: { value: 20, message: "En fazla 20 karakter girin." },
                        })}
                        label="Kullanıcı Adı"
                        size="small"
                        fullWidth
                        autoFocus
                        variant="outlined"
                        sx={{ mb: 2, borderRadius: 2 }}
                        helperText={errors.username ? errors.username.message : ""}
                        error={!!errors.username}
                    />
                    <TextField
                        {...register("email", {
                            required: "Kullanıcı emaili zorunludur.",
                            minLength: { value: 3, message: "En az 3 karakter girin." },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Geçerli bir email adresi girin.",
                            },
                        })}
                        label="Email Adresi"
                        size="small"
                        fullWidth
                        autoFocus
                        variant="outlined"
                        sx={{ mb: 2, borderRadius: 2 }}
                        helperText={errors.email ? errors.email.message : ""}
                        error={!!errors.email}
                    />

                    <TextField
                        {...register("password", {
                            required: "Şifre zorunludur.",
                            minLength: { value: 6, message: "En az 6 karakter girin." },
                        })}
                        label="Şifre"
                        size="small"
                        fullWidth
                        variant="outlined"
                        sx={{ mb: 2, borderRadius: 2 }}
                        helperText={errors.password ? errors.password.message : ""}
                        error={!!errors.password}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 1 }}
                        color="secondary"
                    >
                        {status === "pending" ? <CircularProgress size="25px" /> : "Submit"}
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
