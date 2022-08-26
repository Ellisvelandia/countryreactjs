import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";

const Countries = ({ clearSelectedRegionHandler, selectedRegion }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      methid: "GET",
      url: `https://restcountries.com/v3.1/region/${selectedRegion}`,
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [selectedRegion]);

  return (
    <Container fixed>
      {loading ? (
        <div className="progress">
          <LinearProgress color="primary" />
        </div>
      ) : (
        <Grid container spacing={3} columns={12} sx={{ margin: "20px 0" }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button
              onClick={() => resetRegionHandler()}
              color="primary"
              variant="contained"
            >
              Pick another region
            </Button>
          </Grid>
          {data.map((country) => (
            <Grid item key={country.name.common} xs={12} sm={12} md={6} lg={6}>
              <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                  component="img"
                  image={country.flags.png}
                  alt="country"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {country.name.common}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Region: ${country.region}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`Population: ${country.population}`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Countries;
