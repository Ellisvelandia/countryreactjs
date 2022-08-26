import React from "react";
import "../App.css";
import AfricaImage from "../assets/Africa-Map-PNG-File.png";
import AmericasImage from "../assets/americas.png";
import AsiaImage from "../assets/asia2.png";
import EuropeImage from "../assets/europe2.png";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const RegionPicker = () => {
  return (
    <div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box
            sx={{
              bgcolor: "#fff",
              minHeight: "90vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              margin: "10px 0",
            }}
          >
            <Grid container spacing={1} columnbs={12}>
              <Grid item xs={12} md={6} lg={6}>
                <div>
                  <img src={AfricaImage} alt="#" />
                  <Typography variant="h4">Africa</Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <div>
                  <img src={AmericasImage} alt="#" />
                  <Typography variant="h4">Americas</Typography>
                </div>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <div>
                  <img src={EuropeImage} alt="#" />
                  <Typography variant="h4">Europe</Typography>
                </div>
              </Grid>

              <Grid item xs={12} md={6} lg={6}>
                <div>
                  <img src={AsiaImage} alt="#" />
                  <Typography variant="h4">Asia</Typography>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default RegionPicker;
