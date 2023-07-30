import React, { useLayoutEffect } from "react";
import "./WhoAmI.css";
import colors from "../../utils/colors";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhoAmI = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".img-antonin", {
        opacity: 1,
        // stagger: 0.5,
        scrollTrigger: {
          trigger: ".who-am-i",
          markers: true,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: ".who-am-i",
        },
      });
    }); // <- Scope!
    return () => ctx.revert();
  }, []);

  return (
    <div className="who-am-i">
      <div className="text-container">
        <div className="title-container">
          <span className="whoami-text uppercase">Who</span>
          <span className="whoami-text uppercase" style={{ marginLeft: 140 }}>
            am I ?
          </span>
          <div className="whoami-marks uppercase">
            <span className="whoami-mark" style={{ color: colors.blue }}>
              ¿
            </span>
            <span className="whoami-mark" style={{ color: colors.yellow }}>
              ¿
            </span>
            <span className="whoami-mark" style={{ color: colors.pink }}>
              ¿
            </span>
          </div>
        </div>
        <div className="description-container">
          <span>Antonin</span>
          <span className="description-age">21</span>
        </div>
        <div className="description-antonin">
          I’m a french student from Bordeaux, learning computer engeniering at
          EPSI School. I'm very curious and fussy, and I want to shine through
          my achievements and progress. Having fun and enjoying myself is the
          most important thing in my personal and professional life.
        </div>
      </div>
      <div className="img-container">
        <div className="img-who-am-i img-antonin"></div>
      </div>
    </div>
  );
};

export default WhoAmI;
