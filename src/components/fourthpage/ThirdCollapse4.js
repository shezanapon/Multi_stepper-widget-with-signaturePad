import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const PrettoSlider = styled(Slider)({
  color: "#1976d2",
  height: 13,
  width: 350,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "white",
    border: "1px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 62,
    height: 25,

    backgroundColor: "#59b1f0",
    transformOrigin: "bottom left",
  },
});
const ThirdCollapse4 = ({ control }) => {
  const c = control;
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <Box>
      <br />

      <Typography variant="h5">Securing Ladders/planks</Typography>
      <br />
      <Divider></Divider>
      <br />
      <br />
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        What are the hazards and risks?
      </Typography>
      <br />
      <Typography sx={{ marginBottom: "10px" }}>
        Horizontal overhang of ladders, planks etc-
        <span className="red">Is it a risk at this site?</span>
      </Typography>

      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            onClick={() => setShow(!show)}
            value="yes"
            control={<Radio />}
            label="yes"
          />
          <FormControlLabel
            onClick={() => setShow(false)}
            value="no"
            control={<Radio />}
            label="no"
          />
        </RadioGroup>
      </FormControl>
      {show && (
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#1976d2",
              fontWeight: "bold",
              paddingBottom: "16px",
              paddingTop: "16px",
            }}
          >
            How will the hazards and risks be controlled?
          </Typography>
          <br />
          <br />
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", marginBottom: "30px" }}
          >
            Minimize horizontal overhang of ladders and planks. Tie a red flag
            (at least 300mm x 300mm) on the end of any ladder / plank that
            extends beyond the rear of the vehicle
          </Typography>
          <br />
          <Typography variant="p">Inherent Risk Rating</Typography>

          <section>
            <Controller
              name="Slider13"
              control={c}
              render={({ field }) => (
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  {...field}
                  onChange={(_, value) => {
                    field.onChange(value);
                  }}
                  max={4}
                  step={1}
                />
              )}
            />
          </section>

          <br />

          <Typography variant="p">Residual Risk Rating</Typography>

          <section>
            <Controller
              name="Slider14"
              control={c}
              render={({ field }) => (
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  {...field}
                  onChange={(_, value) => {
                    field.onChange(value);
                  }}
                  max={4}
                  step={1}
                />
              )}
            />
          </section>
        </Box>
      )}
      <br />
      <Typography sx={{ marginBottom: "10px", paddingTop: "10px" }}>
        Unsecured ladders and planks -
        <span className="red">Is it a risk at this site?</span>
      </Typography>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            onClick={() => setShow1(true)}
            value="yes"
            control={<Radio />}
            label="yes"
          />
          <FormControlLabel
            onClick={() => setShow1(false)}
            value="no"
            control={<Radio />}
            label="no"
          />
        </RadioGroup>
      </FormControl>
      {show1 && (
        <Box>
          <Typography
            variant="subtitle2"
            sx={{
              color: "#1976d2",
              fontWeight: "bold",
              paddingBottom: "16px",
              paddingTop: "16px",
            }}
          >
            How hazards will be controlled?
          </Typography>
          <br />
          <br />
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", marginBottom: "30px" }}
          >
            Install securing points for ladders, planks to minimal movement and
            vibration
          </Typography>
          <br />
          <Typography variant="p">Inherent Risk Rating</Typography>

          <section>
            <Controller
              name="Slider15"
              control={c}
              render={({ field }) => (
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  {...field}
                  onChange={(_, value) => {
                    field.onChange(value);
                  }}
                  max={4}
                  step={1}
                />
              )}
            />
          </section>

          <br />

          <Typography variant="p">Residual Risk Rating</Typography>

          <section>
            <Controller
              name="Slider16"
              control={c}
              render={({ field }) => (
                <PrettoSlider
                  valueLabelDisplay="auto"
                  aria-label="pretto slider"
                  {...field}
                  onChange={(_, value) => {
                    field.onChange(value);
                  }}
                  max={4}
                  step={1}
                />
              )}
            />
          </section>
        </Box>
      )}
    </Box>
  );
};

export default ThirdCollapse4;
