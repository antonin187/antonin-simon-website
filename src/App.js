import logo from "./logo.svg";
import "./App.css";
import Home from "./Screens/Home/Home";
import WhoAmI from "./Screens/WhoAmI/WhoAmI";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect, useLayoutEffect } from "react";
import './utils/fonts.css'

function App() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       console.log('This will run every second!');
  //     }, 1000);
  //     return () => clearInterval(interval);
  //   }, [project]);

  // useLayoutEffect(() => {
  //   let context = gsap.context(() => {
  //     ScrollSmoother.create({
  //       smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //       effects: true, // looks for data-speed and data-lag attributes on elements
  //       content: "#smooth-content",
  //       smoothTouch: 1,
  //     });
  //   });
  //   return () => context.revert();
  // }, []);
  return (
    <>
      {/* <div id="smooth-content"> */}
      <Home />
      {/* <WhoAmI /> */}
      {/* </div> */}
    </>
  );
}

export default App;
