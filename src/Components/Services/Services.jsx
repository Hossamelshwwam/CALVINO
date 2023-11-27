import React, { Fragment } from "react";
import Hero from "./Hero";
import Info from "./Info";
import Status from "./Status";
import Carousel from "./Carousel";
import Email from "../Email";

const Services = ({ width }) => {
  return (
    <Fragment>
      <Hero width={width} />
      <Info />
      <Status />
      <Carousel width={width} />
      <Email />
    </Fragment>
  );
};

export default Services;
