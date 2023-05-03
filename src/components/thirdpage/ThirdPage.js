import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import Collapse from "./Collapse";
import React, { useState } from "react";

const ThirdPage = ({ control }) => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={"md"}>
        <Box>
          <Box>
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
              label="Hazardous Materials"
            />
            {show && <Collapse control={control} />}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default ThirdPage;
