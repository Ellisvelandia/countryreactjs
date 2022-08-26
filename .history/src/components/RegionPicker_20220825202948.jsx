import React from "react";
import "../App.css";
import AfricaImage from "../assets/Africa-Map-PNG-File.png";
import AmericaImage from "../assets/americas.png";
import AsiaImage from "../assets/asia2.png";
import EuropeImage from "../assets/europe2.png";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material/";

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
          />
        </Container>
      </React.Fragment>
    </div>
  );
};

export default RegionPicker;
