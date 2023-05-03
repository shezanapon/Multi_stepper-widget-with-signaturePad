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
const FirstCollapse4 = ({ control }) => {
  const c = control;
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <Box>
      <br />

      <Typography variant="h5">Hazardous Material</Typography>
      <br />
      <Divider></Divider>
      <br />
      <br />
      <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
        What are the hazards and risks?
      </Typography>
      <br />
      <Typography>
        Unsecured hazardous material containers in vehicles -
        <span>
          <Typography variant="p" sx={{ color: "red" }}>
            Is it a risk at this site?
          </Typography>
        </span>
      </Typography>
      <br />
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
          <Typography sx={{ paddingBottom: "16px", paddingTop: "16px" }}>
            Inherent Risks - Unsecured hazardous material container in vehicles
          </Typography>

          <section>
            <Controller
              name="Slider7"
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
          <Typography
            variant="subtitle1"
            sx={{ color: "#1976d2", fontWeight: "bold", paddingBottom: "15px" }}
          >
            How will the hazards and risk be controlled?
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: "bold", marginBottom: "30px" }}
          >
            All lids securely fastened and materials securely fastened in
            vehicles
          </Typography>
          <br />
          <br />
          <Typography variant="p">Residual Risk</Typography>

          <section>
            <Controller
              name="Slider8"
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

          <Typography>
            Waste to Ground -
            <span>
              <Typography variant="p" sx={{ color: "red" }}>
                Is it a risk at this site?
              </Typography>
            </span>
          </Typography>
          <br />
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                onClick={() => setShow1(!show1)}
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
                Prevent contamination to sewers, drains and waterways and zero
                waste to ground.
              </Typography>
              <br />
              <Typography variant="p">Inherent Risk Rating</Typography>

              <section>
                <Controller
                  name="Slider9"
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
                  name="Slider10"
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
      )}
    </Box>
  );
};

export default FirstCollapse4;
