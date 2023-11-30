import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout";
import "../node_modules/preline/dist/preline";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    VanillaTilt.init(
      document.querySelectorAll(".card", {
        reverse: true, // reverse the tilt direction
        max: 35, // max tilt rotation (degrees)
        perspective: 5000, // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 3000, // Speed of the enter/exit transition
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be enabled. Can be "x" or "y"
        reset: true, // If the tilt effect has to be reset on exit.
        "reset-to-start": true, // Whether the exit reset will go to [0,0] (default) or [startX, startY]
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
        glare: false, // if it should have a "glare" effect
        "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
        "glare-prerender": false,
      })
    );
    Aos.init({
      // Global settings:
      disable: "phone", // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 600, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 800, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.onresize = function () {
      setWidth(window.innerWidth);
    };
  });

  const route = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About width={width} /> },
        { path: "/services", element: <Services width={width} /> },
        { path: "/blog", element: <Blog width={width} /> },
        { path: "/contact", element: <Contact width={width} /> },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
