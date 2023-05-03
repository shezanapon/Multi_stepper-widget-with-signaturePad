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
import FirstCollapse4 from "./FirstCollapse4";
import SecondCollapse4 from "./SecondCollapse4";
import ThirdCollapse4 from "./ThirdCollapse4";

const FourthPage = ({ control }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={"md"}>
        <Box>
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>
              Task Name:
              <span style={{ fontWeight: "normal" }}>
                {" "}
                Transporting Paint & Equipment
              </span>
            </Typography>
            <br />
            <br />
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Hazardous Elements
            </Typography>
            <br />
            <FormControlLabel
              control={<Checkbox onClick={() => setShow(!show)} size="small" />}
              label="Environmental - incidient/spills"
            />
            <br />
            {show && <FirstCollapse4 control={control} />}

            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow1(!show1)} size="small" />
              }
              label="Flying Objects"
            />
            <br />

            {show1 && <SecondCollapse4 control={control} />}

            <FormControlLabel
              control={
                <Checkbox onClick={() => setShow2(!show2)} size="small" />
              }
              label="Securing Ladders/planks"
            />

            {show2 && <ThirdCollapse4 control={control} />}
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default FourthPage;
