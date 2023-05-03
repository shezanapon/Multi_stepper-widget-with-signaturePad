import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import FirstCollapse from "./FirstCollapse";
import SecondCollapse from "./SecondCollapse";

const SecondPage = ({ control }) => {
  const c = control;
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <>
      <Box>
        <React.Fragment>
          <CssBaseline />
          <Container>
            <Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  COVID 19 SAFE WORK PLAN
                </Typography>
                <div>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Task Name:
                    <span style={{ color: "red", fontWeight: "normal" }}>
                      Attending work site
                    </span>
                  </Typography>
                </div>
                <br />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Would this Hazardous Element exist on this worksite?
                </Typography>
                <br />
                <FormControlLabel
                  control={
                    <Checkbox onClick={() => setShow(!show)} size="small" />
                  }
                  label="Attracting COVID-19 from clients, other workers or surfaces"
                />

                {show && <FirstCollapse control={c} />}
                <br />
                <FormControlLabel
                  control={
                    <Checkbox onClick={() => setShow2(!show2)} size="small" />
                  }
                  label="Alcohol based sanitiser"
                />
                {show2 && <SecondCollapse control={c} />}
              </Box>
            </Box>
          </Container>
        </React.Fragment>
      </Box>
    </>
  );
};

export default SecondPage;
