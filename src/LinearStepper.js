import {
  Box,
  Button,
  Container,
  Grid,
  Step,
  StepButton,
  Stepper,
} from "@mui/material";

import FourthPage from "./components/fourthpage/FourthPage";
import ThirdPage from "./components/thirdpage/ThirdPage";

import SecondPage from "./components/secondpage/SecondPage";
import FifthPage from "./components/fifthpage/FifthPage";
import FirstPage from "./components/firstpage/FirstPage";
import LastPage from "./components/lastpage/LastPage";
import { useState } from "react";
import { Controller } from "react-hook-form";

function getSteps() {
  return ["", "", "", "", "", ""];
}
const stepStyle = {
  "&.MuiStepIcon-root": {
    fontSize: "3rem",
  },

  "& .MuiStepConnector-line": {
    borderTopWidth: 3,
    borderRadius: 1,
  },
  "& .Mui-active": {
    borderTopWidth: 3,
    borderRadius: 1,

    "&.MuiStepIcon-root": {
      color: "#2f9eec",
      fontSize: "1.9rem",
      borderStyle: "solid",
      borderColor: "white",
      borderWidth: "4px",
      borderRadius: "50%",
      boxShadow: "0 0 0 2px #2f9eec",
    },
  },
};
function getStepContent(step, control, setValue) {
  switch (step) {
    case 0:
      return <FirstPage control={control} />;
    case 1:
      return <SecondPage control={control} />;
    case 2:
      return <ThirdPage control={control} />;
    case 3:
      return <FourthPage control={control} />;
    case 4:
      return <FifthPage control={control} />;
    case 5:
      return <LastPage control={control} setValue={setValue} />;

    default:
      return "unknown";
  }
}
const steps = getSteps();
const LinearStepper = ({ control, setValue }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  return (
    <div>
      <Stepper activeStep={activeStep} sx={stepStyle}>
        {steps.map((step, index) => {
          return (
            <Step>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {step}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <br />
      <>{getStepContent(activeStep, control, setValue)}</>
      <br />
      <Container maxWidth={"md"}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              {activeStep === 0 ? null : (
                <Button
                  sx={{
                    bgcolor: "#494949",
                    color: "white",
                    "&:hover": {
                      background: "#494949",
                    },
                  }}
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}
            </Grid>
            <Grid xs={6} sx={{ textAlign: "right" }}>
              {activeStep === 5 ? null : (
                <Button
                  sx={{
                    mr: 1,
                    bgcolor: "#494949",
                    color: "white",
                    width: "30px",
                    "&:hover": {
                      background: "#494949",
                    },
                  }}
                  onClick={handleNext}
                >
                  NEXT
                </Button>
              )}
              {activeStep === 5 ? (
                <Button
                  sx={{
                    mr: 1,
                    bgcolor: "#494949",
                    color: "white",
                    width: "30px",
                    "&:hover": {
                      background: "#494949",
                    },
                  }}
                  type="submit"
                >
                  SUBMIT
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default LinearStepper;
