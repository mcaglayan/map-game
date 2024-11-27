// src/components/MapGame.jsx
import React from "react";
import { Chart } from "react-google-charts";

const MapGame = ({ data, hintLevel }) => {
  const options = {
    colorAxis: { colors: ["#f4c7c3", "#e31a1c"] },
    legend: "none",
    backgroundColor: "#f5f5f5",
  };

  const processData = () => {
    const header = ["Country", "Value"];
    return [header, ...data];
  };

  return (
    <div style={{ margin: "20px" }}>
      <Chart
        chartType="GeoChart"
        data={processData()}
        options={options}
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default MapGame;
