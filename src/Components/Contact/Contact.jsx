import { Fragment } from "react";
import Hero from "./Hero";
import Form from "./Form";

const Contact = ({ width }) => {
  return (
    <Fragment>
      <Hero width={width} />
      <Form />
    </Fragment>
  );
};

export default Contact;
