import {
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import SignatureCanvas from "react-signature-canvas";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

import EventIcon from "@mui/icons-material/Event";

const LastPage = ({ control, setValue }) => {
  const c = control;
  const [sign, setSign] = useState();
  const [url, setUrl] = useState();
  const handleClear = () => {
    sign.clear();
    setUrl("");
  };

  const handleGenerate = (data) => {
    // setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
    setValue(data, sign.getTrimmedCanvas().toDataURL("image/png"));
  };
  console.log(sign);
  console.log(url);

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Box>
            <Typography variant="p">
              This SWMS has been developed in consultation with the relevant
              employer and workers on site. I have read the above SWMS and I
              understand its contents. I confirm that I have the skills and
              training, including relevant certification to conduct the task as
              described. I agree to comply with safety requirements within this
              SWMS including risk control measures, safe work instructions and
              Personal Protective Equipment as described. I will refrain from
              tasks for which I do not have the appropriate skills, training or
              certification and inform the site foreperson / Furlong Management
              immediately.
            </Typography>
          </Box>
          <br />

          <section>
            <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
              Name
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
              name="name10"
              control={c}
            />
          </section>
          <section>
            <Typography sx={{ paddingTop: "20px" }} variant="subtitle2">
              signature1
            </Typography>
            <Box>
              <Box sx={{ borderColor: "#e0e0e0", border: 1, width: "95%" }}>
                <SignatureCanvas
                  canvasProps={{
                    width: 700,
                    height: 200,
                    className: "sigCanvas",
                  }}
                  ref={(data) => setSign(data)}
                  fullWidth
                  name="Signature1"
                />
              </Box>

              <Box sx={{ paddingTop: "20px" }}>
                <Button
                  sx={{ bgcolor: "#f0f0f0", color: "black" }}
                  onClick={handleClear}
                >
                  Clear
                </Button>
                <Button
                  variant="contained"
                  sx={{ marginLeft: "7px" }}
                  onClick={() => handleGenerate("sign_1")}
                >
                  Save
                </Button>
              </Box>
            </Box>
            {/* <img src={url} /> */}
          </section>
          <br />
          <label style={{ fontWeight: "bold" }}>Date</label>
          <br />
          <FormControl sx={{ m: 1, width: "45ch" }} size="small">
            <InputLabel>mm/dd/yy</InputLabel>
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <EventIcon />
                </InputAdornment>
              }
            />
          </FormControl>

          <section>
            <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
              Name
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
              name="name11"
              control={c}
            />
          </section>
          <section>
            <Typography sx={{ paddingTop: "20px" }} variant="subtitle2">
              signature2
            </Typography>
            <Box>
              <Box sx={{ border: 1, width: "95%" }}>
                <SignatureCanvas
                  canvasProps={{
                    width: "520%",
                    height: 200,
                    className: "sigCanvas",
                  }}
                  name="Signature2"
                  fullWidth
                />
              </Box>
              <Box sx={{ paddingTop: "20px" }}>
                <Button
                  sx={{ bgcolor: "#f0f0f0", color: "black" }}
                  onClick={handleClear}
                >
                  Clear
                </Button>
                <Button
                  variant="contained"
                  sx={{ marginLeft: "7px" }}
                  onClick={() => handleGenerate("sign_2")}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </section>
          <br />
          <label style={{ fontWeight: "bold" }}>Date</label>
          <br />
          <FormControl sx={{ m: 1, width: "45ch" }} size="small">
            <InputLabel>mm/dd/yy</InputLabel>
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <EventIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <section>
            <Typography sx={{ paddingTop: "20px" }} variant="subtitle1">
              Name
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
              name="name12"
              control={c}
            />
          </section>
          <section>
            <Typography sx={{ paddingTop: "20px" }} variant="subtitle2">
              signature3
            </Typography>
            <Box>
              <Box sx={{ border: 1, width: "95%" }}>
                <SignatureCanvas
                  canvasProps={{
                    width: 700,
                    height: 200,
                    className: "sigCanvas",
                  }}
                  name="Signature3"
                  fullWidth
                />
              </Box>
              <Box sx={{ paddingTop: "20px" }}>
                <Button
                  sx={{ bgcolor: "#f0f0f0", color: "black" }}
                  onClick={handleClear}
                >
                  Clear
                </Button>
                <Button
                  variant="contained"
                  sx={{ marginLeft: "7px" }}
                  onClick={() => handleGenerate("sign_3")}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </section>
          <br />
          <label style={{ fontWeight: "bold" }}>Date</label>
          <br />
          <FormControl sx={{ m: 1, width: "45ch" }} size="small">
            <InputLabel>mm/dd/yy</InputLabel>
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <EventIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Container>
      </React.Fragment>
    </>
  );
};

export default LastPage;
