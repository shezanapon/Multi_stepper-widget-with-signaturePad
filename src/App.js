import logo from "./logo.svg";
import "./App.css";
import FirstPage from "./components/firstpage/FirstPage";
import SecondPage from "./components/secondpage/SecondPage";
import ThirdPage from "./components/thirdpage/ThirdPage";
import FourthPage from "./components/fourthpage/FourthPage";
import FifthPage from "./components/fifthpage/FifthPage";
import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import LinearStepper from "./LinearStepper";
import LastPage from "./components/lastpage/LastPage";
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [show, setShow] = useState(false);
  const { handleSubmit, reset, setValue, control } = useForm({});
  const handleFinalSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth={"md"}>
        <Box
          sx={{
            minHeight: "80vh",
            marginTop: "30px",
            marginBottom: "30px",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
        >
          <Box sx={{ bgcolor: "#494949", color: "white" }}>
            <Typography
              variant="h5"
              sx={{
                bgColor: "#494949",
                color: "white",
                textAlign: "center",
                paddingBottom: "10px",
                paddingTop: "10px",
                marginTop: "25px",
                marginBottom: "25px",
              }}
            >
              Furlong Painting - Safe Work Method Statement (SWMS)
            </Typography>
          </Box>
          <br />
          <Box component={Box} p={4}>
            <form onSubmit={handleSubmit((data) => handleFinalSubmit(data))}>
              <LinearStepper control={control} setValue={setValue} />
              {/* <LastPage control={control} /> */}
              {/* <SecondPage control={control} /> */}
              {/* <ThirdPage control={control} /> */}
              {/* <FourthPage control={control} /> */}
            </form>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default App;
