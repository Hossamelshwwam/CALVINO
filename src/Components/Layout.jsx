import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ButtonToTop from "./ButtonToTop";

const Layout = () => {
  const [scroll, setScroll] = useState(window.scrollY);

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
  });
  return (
    <div className="relative">
      <Navbar />
      <Outlet />
      <Footer />
      {scroll > 200 && <ButtonToTop />}
    </div>
  );
};

export default Layout;
