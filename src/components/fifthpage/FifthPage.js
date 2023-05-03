import {
  Box,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const FifthPage = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={"md"}>
        <Box sx={{ padding: "0px 30px 0px 30px" }}>
          <Box sx={{ bgcolor: "#ffffff" }}>
            <Typography sx={{ fontWeight: "bold" }}>
              Task Name:
              <span style={{ fontWeight: "normal" }}> Planning</span>
            </Typography>
            <br />
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Hazardous Elements
            </Typography>
            <br />
            <FormControlLabel
              control={<Checkbox onClick={() => setShow(!show)} size="small" />}
              label="Manual Handling Risks"
            />
            {show && <p>Helloooo</p>}
            <br />
            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow1(!show1)} size="small" />
              }
              label="Emergency Fire and Explosive hazards"
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow2(!show2)} size="small" />
              }
              label="Working adjacent to Roads and Public safety"
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow3(!show3)} size="small" />
              }
              label="Contact with mobile plant or vehicles"
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow4(!show4)} size="small" />
              }
              label="Spray Painting"
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow5(!show5)} size="small" />
              }
              label="Ground surface"
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow6(!show6)} size="small" />
              }
              label="Working at Heights above 2m"
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow7(!show7)} size="small" />
              }
              label="Ladder Safety"
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow8(!show8)} size="small" />
              }
              label="Trestle Safety"
            />
            <br />
            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow9(!show9)} size="small" />
              }
              label="EWP / Powered Access Equipment"
            />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default FifthPage;
