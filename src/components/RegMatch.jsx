import React from "react";

const RegMatch = ({ id, vehicleRegistrationNo, make }) => {
  return (
    <>
      <h2>{vehicleRegistrationNo}</h2>
      <p>{id}</p>
      <p>{make}</p>
    </>
  );
};


export default RegMatch;