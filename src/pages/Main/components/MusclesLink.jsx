import React from "react";
import { Link } from "react-router-dom";

const MusclesLink = ({ address, muscleKoreaName }) => {
  return <Link to={address}>{muscleKoreaName}</Link>;
};

export default MusclesLink;
