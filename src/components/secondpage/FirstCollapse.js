import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, useController, useForm } from "react-hook-form";
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

const FirstCollapse = ({ control }) => {
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    setShow(event.target.value);
  };
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
      <Typography variant="subtitle1">
        Workers or others catching COVID-19 (could result in serious illness or
        death).
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
          <Typography sx={{ paddingBottom: "16px", paddingTop: "16px" }}>
            Inherent Risk Rating - (Workers or others catching COVID-19 (could
            result in serious illness or death))
          </Typography>

          <section>
            <Controller
              name="slider1"
              control={control}
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
          <Typography variant="subtitle2">
            Staff and contractors have been briefed on symptoms of COVID-19 and
            have been told to stay home if they aren’t feeling well. Hygiene
            <ul>
              <li>
                Avoid contact with others (shaking hands, touching faces,
                hugging, and other intimate contact).
              </li>
              <li>
                Wearing of disposable nitrile gloves when required on site
              </li>
              <li>
                Avoid touching surfaces on client sites without gloves on.
              </li>
              <li>
                Frequently wash hands with soap and water for at least 20
                seconds, or use an alcohol-based hand rub. Particular attention
                must be taken when using the toilet before preparing and eating
                food. Alcohol based hand sanitiser is available for all staff
                and contractors
              </li>
              <li>
                Wearing of face mask at all times (as required by prevailing
                Victorian Health Department regulations). Face masks are made
                available for all staff and contractors
              </li>
              <li>
                Cover your mouth when coughing and sneezing with tissue or a
                flexed elbow
              </li>
              <li>Dispose of tissues immediately</li>
              <li>
                Avoid using client staffrooms / common areas for meal breaks.
                Prefer in shaded areas outdoors if weather permits or by
                yourself in vehicle. Social Distancing
              </li>
              <li>
                Staff and contractors to work more than 1.5m away from each
                other, keeping 4sqm distance . Work in different areas on site
                where able. This includes toolbox meetings and meal breaks.
              </li>
            </ul>
          </Typography>
          <Typography sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
            Residual Risk Rating - (Workers or others catching COVID-19 (could
            result in serious illness or death))
          </Typography>

          <section>
            <Controller
              name="slider2"
              control={control}
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

export default FirstCollapse;
