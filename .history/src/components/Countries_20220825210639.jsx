import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";


const Countries = ({ clearSelectedRegionHandler }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   setLoading(true);
   axios({
    methid: "GET",
    url: `https://restcountries.com/v3.1/region/${selectedRegion}`,
   })
   .then(())
  }, [selectedRegion])

  return (
        <div>Countries</div>
  ) 
}

export default Countries;
