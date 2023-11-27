import React, { Fragment } from "react";

// Import Swiper styles
import "swiper/css";
import Hero from "./Hero";
import Section from "./Section";
import Blogs from "./Blogs";
import Email from "../Email";
const Blog = ({ width }) => {
  return (
    <Fragment>
      <Hero width={width} />
      <Section />
      <Blogs />
      <Email />
    </Fragment>
  );
};

export default Blog;
