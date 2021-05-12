import React from "react";

const RegMatch = ({ vehicleRegistrationNo, Make, Model }) => {
  return (
    <>
      <h2>{vehicleRegistrationNo}</h2>
      <p>{Make}</p>
      <p>{Model}</p>
    </>
  );
};


export default RegMatch;