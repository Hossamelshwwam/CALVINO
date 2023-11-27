import { Fragment, useEffect, useState } from "react";
import Hero from "./Hero";
import Text from "./Text";
import Info from "./Info";
import Carousel from "./Carousel";
import Email from "../Email";

const About = ({ width }) => {
  return (
    <Fragment>
      <Hero width={width} />
      <Text />
      <Info width={width} />
      <Carousel width={width} />
      <Email />
    </Fragment>
  );
};

export default About;
