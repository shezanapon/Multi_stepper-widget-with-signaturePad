import image from "../firstpage/image/furlong.png";
import pic from "../firstpage/image/pic.png";
import {
  Box,
  Container,
  CssBaseline,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller } from "react-hook-form";
import { RadioGroup } from "@mui/material";
const FirstPage = ({ control }) => {
  const c = control;

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Box>
            <Box sx={{ textAlign: "center" }}>
              <Box>
                <img height="173" src={image} alt=""></img>
              </Box>
              <br />
              <Typography sx={{ fontWeight: "bold" }} variant="subtitle2">
                All persons involved in works must have SWMS communicated to
                them before works commence and amend where necessary during
                works. Tool Box meetings identify, control and communicate
                hazards, with work ceasing if incident or near miss occurs.
              </Typography>
            </Box>

            <section>
              <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                Principal Contractor
              </Typography>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    sx={{ paddingTop: "10px" }}
                  />
                )}
                name="Contractor"
                control={c}
              />
            </section>
            <section>
              <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                Client
              </Typography>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    sx={{ paddingTop: "10px" }}
                  />
                )}
                name="Client"
                control={c}
              />
            </section>
            <section>
              <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                Workplace location
              </Typography>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    multiline
                    rows={5}
                    sx={{ paddingTop: "10px" }}
                  />
                )}
                name="Workplace location"
                control={c}
              />
            </section>
            <section>
              <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                Work Activity
              </Typography>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    sx={{ paddingTop: "10px" }}
                  />
                )}
                name="Work Activity"
                control={c}
              />
            </section>
            <section>
              <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                Project Manager
              </Typography>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    sx={{ paddingTop: "10px" }}
                  />
                )}
                name="Project Manager"
                control={c}
              />
            </section>
            <section>
              <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
                Furlong Painting - Project Number*
              </Typography>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    sx={{ paddingTop: "10px" }}
                  />
                )}
                name="Project Number"
                control={c}
              />
            </section>
            <section>
              <Typography
                sx={{ paddingTop: "20px", fontWeight: "bold" }}
                variant="subtitle1"
              >
                Workplace Hazardous Materials Register Sighted
              </Typography>
              <Controller
                render={({ field }) => (
                  <RadioGroup aria-label="gender" {...field}>
                    <div sx={{ display: "flex" }}>
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="yes"
                      />
                      <FormControlLabel
                        sx={{ paddingLeft: "200px" }}
                        value="no"
                        control={<Radio />}
                        label="no"
                      />
                    </div>
                  </RadioGroup>
                )}
                name="RadioGroup"
                control={c}
              />
            </section>
            <section>
              <Typography
                sx={{
                  paddingTop: "35px",
                  fontWeight: "bold",
                  paddingBottom: "15px",
                }}
                variant="subtitle1"
              >
                PERSONS CONSULTED IN DEVELOPMENT, REVIEW AND APPROVAL OF SWMS :
              </Typography>
              <Typography
                sx={{ paddingTop: "20px", textAlign: "center" }}
                variant="body2"
              >
                <b>Key Concepts</b>
                <br />
                <b>Hazard-</b>Something in the work environment that has the
                potential to cause harm to a person (injury, illness or death).
                <br />
                <b>Risk-</b> The chance (or likelihood) that a hazard will cause
                that harm.
                <br />
                <b>Control Measure-</b> A thing, work process or system of work
                that controls the OHS hazard or risk
                <br />
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  paddingTop: "30px",
                  textAlign: "center",
                }}
              >
                OHS Risk Matrix and PPE Guide
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  paddingTop: "10px",
                  paddingBottom: "8px",
                  textAlign: "center",
                }}
              >
                To be used to assess the risk rating for identified risks
              </Typography>
              <img src={pic} alt="" width="100%" height="70%"></img>
            </section>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
};

export default FirstPage;
