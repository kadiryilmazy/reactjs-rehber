import { Box, Button, Grid2, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Info from "./Info";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { useState } from "react";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { router } from "../../App";

const steps = ["Teslimat Bilgileri", "Ödeme", "Sipariş Özeti"];
function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
    }
}
export default function CheckoutPage() {
    const [activeStep, setActiveStep] = useState(0);

    function handlePrevious() {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        } else {
            router.navigate("/cart");
        }
    }

    function handleNext() {
        if (activeStep < steps.length) {
            setActiveStep(activeStep + 1);
        } else {
            return null;
        }
    }
    return (
        <Paper>
            <Grid2
                container
                spacing={3}
            >
                <Grid2
                    size={4}
                    sx={{ p: 3, borderRight: "1px solid", borderColor: "divider" }}
                >
                    <Info />
                </Grid2>
                <Grid2
                    size={8}
                    sx={{ p: 3 }}
                >
                    <Stepper
                        activeStep={activeStep}
                        sx={{ height: 40, mb: 4 }}
                    >
                        {steps.map((label) => (
                            <Step
                                key={label}
                                sx={{ color: "secondary" }}
                            >
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <Typography variant="h5">Siparişinizi aldık.</Typography>
                    ) : (
                        <Box sx={{ display: "flex", justifyContent: "space-between", my: 3 }}>
                            <Button
                                startIcon={<ChevronLeftRounded />}
                                variant="contained"
                                color="secondary"
                                onClick={handlePrevious}
                            >
                                {activeStep === 0 ? "Sepetime Dön" : steps[activeStep - 1]}
                            </Button>
                            <Button
                                startIcon={<ChevronRightRounded />}
                                variant="contained"
                                color="secondary"
                                onClick={handleNext}
                            >
                                {activeStep === 2 ? "SON" : steps[activeStep + 1]}
                            </Button>
                        </Box>
                    )}
                    {getStepContent(activeStep)}
                </Grid2>
            </Grid2>
        </Paper>
    );
}
