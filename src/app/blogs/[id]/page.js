import { Card, Grid, CardMedia, Box, Typography, CardContent } from "@mui/material";

export default async function Page({ params }) {
    const { id } = await params;

    const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
    const blog = await res.json();

    return (
        <>
            <Grid container>
                <Card sx={{ display: "flex", width: "100%" }}>
                    <CardMedia
                        component="img"
                        sx={{ width: "45%" }}
                        image={`/img/${blog.img}`}
                        alt=""
                    />
                    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 2 }}>
                        <CardContent>
                            <Typography
                                component="div"
                                variant="h6"
                            >
                                {blog.name}
                            </Typography>
                            <Typography
                                component="div"
                                variant="subtitle1"
                            >
                                {blog.description}
                            </Typography>
                        </CardContent>
                    </Box>
                </Card>
            </Grid>
        </>
    );
}
