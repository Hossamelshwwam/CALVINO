import { Fragment } from "react";
import Hero from "./Hero";
import Features from "./Features";
import Main from "./Main";
import Card from "./Card";
import Brands from "./Brands";
import Email from "../Email";

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Features />
      <Main />
      <Card />
      <Brands />
      <Email />
    </Fragment>
  );
};

export default Home;
