import React, {useState, useEffect} from "react";
import "../App";
import axios from ''

const Countries = ({ clearSelectedRegionHandler }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  return <div>Countries</div>;
};

export default Countries;