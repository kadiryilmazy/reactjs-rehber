import { LockOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import requests from "../../api/apiClient";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "./accountSlicer";

export default function LoginPage() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });
    function handleForm(data, e) {
        requests.account
            .login(data)
            .then((user) => {
                console.log(user);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(setUser(user));
                navigate("/");
            })
            .catch((error) => console.log(error));
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
                        disabled={!isValid}
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
