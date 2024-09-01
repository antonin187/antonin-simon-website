import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./Home-Desktop.css";
import "./Home-Mobile.css";
import starBlue from "../../assets/img/star-blue.png";
import starPink from "../../assets/img/star-pink.png";
import starYellow from "../../assets/img/star-yellow.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WhoAmI from "../WhoAmI/WhoAmI";
import colors from "../../utils/colors";
import starSVG from "../../assets/img/star-black-large.svg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const section = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const blurs = self.selector(".blur");
      blurs.forEach((blurDiv) => {
        gsap.to(blurDiv, {
          filter: "blur(30px)",
          opacity: 0,
          scrollTrigger: {
            trigger: ".home-section",
            start: "top top",
            end: "center top",
            scrub: true,
          },
        });
      });
      gsap.to(".slider", {
        top: "50%",
        scrollTrigger: {
          trigger: ".home-section",
          start: "top top",
          end: "bottom center",
          scrub: true,
          pin: ".home-section",
        },
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".who-am-i",
            start: "top top",
            end: "bottom+=1000 top",
            scrub: true,
            pin: ".who-am-i",
          },
          defaults: { duration: 1, ease: "esae-out" },
        })
        .to(
          ".img-antonin",
          {
            opacity: 1,
            transform: "scale(1) rotate(2.4deg)",
          },
          "+=1"
        )
        .to(
          ".description-antonin, .description-title-antonin, .description-age",
          {
            top: "0",
            display: "block",
          },
          "-=1"
        )
        .to(
          ".description-antonin, .description-title-antonin, .description-age",
          {
            top: "150px",
          },
          "+=1"
        )
        .to(
          ".description-antonin, .description-title-antonin, .description-age",
          {
            display: "none",
          }
        )
        .to(".img-developer", {
          opacity: 1,
          transform: "scale(1) rotate(-5.14deg)",
        })
        .to(
          ".description-developer, .description-title-developer",
          {
            top: "0",
            display: "block",
          },
          "-=1"
        )
        .to(
          ".description-developer, .description-title-developer",
          {
            top: "150px",
          },
          "+=1"
        )
        .to(".description-developer, .description-title-developer", {
          display: "none",
        })
        .to(".img-basketball", {
          opacity: 1,
          transform: "scale(1) rotate(4.3deg)",
        })
        .to(
          ".description-basketball, .description-title-basketball",
          {
            top: "0",
            display: "block",
          },
          "-=1"
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".github-section",
            start: "top top",
            end: "bottom+=2000 top",
            scrub: true,
            pin: ".github-section",
          },
          defaults: { duration: 1, ease: "ease-out" },
        })
        .to(".visit-texts", {
          transform: "scale(1)",
          marginTop: "30px",
        })
        .to(".button-visit, .catch-it, .damier-container, .black-stars", {
          opacity: 1,
          duration: 0.5,
        })
        .to(".big-star", {
          transform: "translate(-50%, -50%) scale(40) rotate(170deg)",
        });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".conclusion",
            start: "top top",
            end: "center top",
            scrub: true,
            pin: ".conclusion",
          },
          defaults: { duration: 1, ease: "ease-out" },
        })
        .to(".concl-arosaje", {
          top: "-60px",
          right: "-500px",
        })
        .to(".concl-antonin", {
          top: "-100px",
          left: "-120px",
        })
        .to(".concl-wtn", {
          top: "-60px",
        })
        .to(".concl-wtn-mobile", {
          top: "70px",
        });
    }, section); // <- Scope!
    return () => ctx.revert();
  }, []);

  const skillCellHoverAnimation = (currentCell) => {
    switch (currentCell) {
      case "react":
        gsap.to("body", { backgroundColor: colors.reactNative });
        gsap.to(
          ".skill-reactNative>div, .skill-springBoot>div, .skill-swift>div, .skill-illustrator>div, .skill-figma>div, .skills-section-title, .skills-section-subtitle",
          { color: "black" }
        );
        gsap.to(".skill-separator", { backgroundColor: "black" });
        gsap.to(
          ".skill-img-reactNative, .skill-img-spring, .skill-img-swift, .skill-img-illustrator, .skill-img-figma",
          { opacity: 0 }
        );
        gsap.to(".skill-img-react", { opacity: 1 });
        break;
      case "reactNative":
        gsap.to("body", { backgroundColor: colors.reactNative });
        gsap.to(
          ".skill-react>div, .skill-springBoot>div, .skill-swift>div, .skill-illustrator>div, .skill-figma>div, .skills-section-title, .skills-section-subtitle",
          { color: "black" }
        );
        gsap.to(".skill-separator", { backgroundColor: "black" });
        gsap.to(
          ".skill-img-react, .skill-img-spring, .skill-img-swift, .skill-img-illustrator, .skill-img-figma",
          { opacity: 0 }
        );
        gsap.to(".skill-img-reactNative", { opacity: 1 });
        break;
      case "spring":
        gsap.to("body", { backgroundColor: colors.springBoot });
        gsap.to(
          ".skill-react>div, .skill-reactNative>div, .skill-swift>div, .skill-illustrator>div, .skill-figma>div, .skills-section-title, .skills-section-subtitle",
          { color: "black" }
        );
        gsap.to(".skill-separator", { backgroundColor: "black" });
        gsap.to(
          ".skill-img-react, .skill-img-reactNative, .skill-img-swift, .skill-img-illustrator, .skill-img-figma",
          { opacity: 0 }
        );
        gsap.to(".skill-img-spring", { opacity: 1 });
        break;
      case "swift":
        gsap.to("body", { backgroundColor: colors.swift });
        gsap.to(
          ".skill-react>div, .skill-reactNative>div, .skill-springBoot>div, .skill-illustrator>div, .skill-figma>div, .skills-section-title, .skills-section-subtitle",
          { color: "black" }
        );
        gsap.to(".skill-separator", { backgroundColor: "black" });
        gsap.to(
          ".skill-img-react, .skill-img-reactNative, .skill-img-spring, .skill-img-illustrator, .skill-img-figma",
          { opacity: 0 }
        );
        gsap.to(".skill-img-swift", { opacity: 1 });
        break;
      case "illustrator":
        gsap.to("body", { backgroundColor: colors.illustrator });
        gsap.to(
          ".skill-react>div, .skill-reactNative>div, .skill-springBoot>div, .skill-swift>div, .skill-figma>div, .skills-section-title, .skills-section-subtitle",
          { color: "black" }
        );
        gsap.to(".skill-separator", { backgroundColor: "black" });
        gsap.to(
          ".skill-img-react, .skill-img-reactNative, .skill-img-spring, .skill-img-swift, .skill-img-figma",
          { opacity: 0 }
        );
        gsap.to(".skill-img-illustrator", { opacity: 1 });
        break;
      case "figma":
        gsap.to("body", { background: colors.figma });
        gsap.to(
          ".skill-react>div, .skill-reactNative>div, .skill-springBoot>div, .skill-swift>div, .skill-illustrator>div, .skills-section-title, .skills-section-subtitle",
          { color: "black" }
        );
        gsap.to(".skill-separator", { backgroundColor: "black" });
        gsap.to(
          ".skill-img-react, .skill-img-reactNative, .skill-img-spring, .skill-img-swift, .skill-img-illustrator",
          { opacity: 0 }
        );
        gsap.to(".skill-img-figma", { opacity: 1 });
        break;
      default:
        break;
    }
  };

  const skillCellOutAnimation = (isFigma) => {
    if (isFigma) {
      gsap.to("body", { background: "black" });
      gsap.to(
        ".skill-react>div, .skill-reactNative>div, .skill-springBoot>div, .skill-swift>div, .skill-illustrator>div, .skill-figma>div, .skills-section-title, .skills-section-subtitle",
        { color: "white" }
      );
      gsap.to(".skill-separator", { backgroundColor: "white" });
    } else {
      gsap.to("body", { backgroundColor: "black" });
      gsap.to(
        ".skill-react>div, .skill-reactNative>div, .skill-springBoot>div, .skill-swift>div, .skill-illustrator>div, .skill-figma>div, .skills-section-title, .skills-section-subtitle",
        { color: "white" }
      );
      gsap.to(".skill-separator", { backgroundColor: "white" });
    }
    gsap.to(
      ".skill-img-react, .skill-img-reactNative, .skill-img-spring, .skill-img-swift, .skill-img-illustrator, .skill-img-figma",
      { opacity: 0 }
    );
  };

  const myAge = () => {
    const birthday = new Date(2002, 2, 18);
    const today = new Date();
    const ageInMilliseconds = today - birthday;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Using 365.25 to account for leap years
    return Math.floor(ageInYears); // Return the age as a whole number
  }

  return (
    <div id="home" className="container" ref={section}>
      <section className="home-section center">
        <div className="antonin blur letter-spacing-14">Antonin</div>
        <div className="scroll-div center">
          <div className="scroll-indicator blur"></div>
          <div className="blur">Scroll</div>
        </div>
        <img className="starBlue blur" src={starBlue} />
        <img className="starPink blur" src={starPink} />
        <img className="starYellow blur" src={starYellow} />
      </section>
      <div className="slider">
        <span className="big-letter uppercase letter-spacing-14">Make</span>
        <span className="big-letter uppercase italic letter-spacing-14">
          Yourself
        </span>
        <span className="big-letter uppercase letter-spacing-14">At Home</span>
      </div>

      {/* <WhoAmI /> */}
      <section id="whoAmI" className="who-am-i">
        <div className="text-container">
          <div className="title-container">
            <span className="whoami-text uppercase">Who</span>
            <span className="whoami-text uppercase">am I ?</span>
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
            <span className="description-title-antonin">Antonin</span>
            <span className="description-age">{myAge()}</span>
            <span className="description-title-developer">Developer</span>
            <span className="description-title-basketball">Basketball</span>
          </div>
          <div className="description-text-container">
            <span className="description-antonin">
              I'm a computer engineering student from Bordeaux at EPSI. I'm very
              curious and fussy, and I want to progress through my achievements
              and discoveries. Having fun is the most important thing in my
              personal and professional life.
            </span>
            <span className="description-developer">
              For me, coding represents a gigantic expanse of creation.
              Specialising in web and mobile development, I like to try my hand
              at everything and discover new things.
            </span>
            <span className="description-basketball">
              I've been playing basketball since I was a kid. I've been able to
              play at different levels, which has enabled me to make good
              progress. What I love about this sport is sharing a passion with
              other people while having fun and taking my mind off things.
            </span>
          </div>
        </div>
        <div className="img-container">
          <div className="img-who-am-i img-antonin"></div>
          <div className="img-who-am-i img-developer"></div>
          <div className="img-who-am-i img-basketball"></div>
        </div>
      </section>

      {/* ----------------- */}

      {/* ------------ SKILLS ------------ */}
      <div id="skills" className="skills-section">
        <div className="skills-section-title">Skills</div>
        <div className="skills-section-subtitle">
          Some of the technologies I'm used to using.
        </div>
        <div className="display-skills">
          <div>
            <div className="skill-container">
              <div className="name-skill-title uppercase">Name</div>
              <div className="description-skill-title uppercase">
                Description
              </div>
            </div>
            <div className="skill-separator"></div>

            {/* REACT */}
            <div
              className="skill-container skill-react"
              onMouseOut={() => skillCellOutAnimation(false)}
              onMouseOver={() => skillCellHoverAnimation("react")}
            >
              <div className="name-skill-title skill-cell-name">React</div>
              <div className="description-skill-title skill-cell-descr">
                Component-based website development.
              </div>
            </div>
            <div className="skill-separator"></div>

            {/* REACT NATIVE */}
            <div
              className="skill-container skill-reactNative"
              onMouseOut={() => skillCellOutAnimation(false)}
              onMouseOver={() => skillCellHoverAnimation("reactNative")}
            >
              <div className="name-skill-title skill-cell-name">
                React Native
              </div>
              <div className="description-skill-title skill-cell-descr">
                Cross-platform mobile development.
              </div>
            </div>
            <div className="skill-separator"></div>

            {/* SPRING BOOT */}
            <div
              className="skill-container skill-springBoot"
              onMouseOut={() => skillCellOutAnimation(false)}
              onMouseOver={() => skillCellHoverAnimation("spring")}
            >
              <div className="name-skill-title skill-cell-name">
                Spring Boot
              </div>
              <div className="description-skill-title skill-cell-descr">
                Creation of databases and development of web services.
              </div>
            </div>
            <div className="skill-separator"></div>

            {/* SWIFT */}
            <div
              className="skill-container skill-swift"
              onMouseOut={() => skillCellOutAnimation(false)}
              onMouseOver={() => skillCellHoverAnimation("swift")}
            >
              <div className="name-skill-title skill-cell-name">Swift</div>
              <div className="description-skill-title skill-cell-descr">
                I'm learning about native development for Apple products.
              </div>
            </div>
            <div className="skill-separator"></div>

            {/* ILLUSTRATOR */}
            <div
              className="skill-container skill-illustrator"
              onMouseOut={() => skillCellOutAnimation(false)}
              onMouseOver={() => skillCellHoverAnimation("illustrator")}
            >
              <div className="name-skill-title skill-cell-name">
                Illustrator
              </div>
              <div className="description-skill-title skill-cell-descr">
                Creation of illustrations and logos.
              </div>
            </div>
            <div className="skill-separator"></div>

            {/* FIGMA  */}
            <div
              className="skill-container skill-figma"
              onMouseOut={() => skillCellOutAnimation(true)}
              onMouseOver={() => skillCellHoverAnimation("figma")}
            >
              <div className="name-skill-title skill-cell-name">Figma</div>
              <div className="description-skill-title skill-cell-descr">
                Website and mobile application design.
              </div>
            </div>
            <div className="skill-separator"></div>
          </div>
          <div className="skill-img-container">
            <img
              src={require("../../assets/img/skills/skill-react.png")}
              className="skill-img-react skill-img"
            ></img>
            <img
              src={require("../../assets/img/skills/skill-react.png")}
              className="skill-img-reactNative skill-img"
            ></img>
            <img
              src={require("../../assets/img/skills/skill-spring.png")}
              className="skill-img-spring skill-img"
            ></img>
            <img
              src={require("../../assets/img/skills/skill-swift.png")}
              className="skill-img-swift skill-img"
            ></img>
            <img
              src={require("../../assets/img/skills/skill-illustrator.png")}
              className="skill-img-illustrator skill-img"
            ></img>
            <img
              src={require("../../assets/img/skills/skill-figma.png")}
              className="skill-img-figma skill-img"
            ></img>
          </div>
        </div>
      </div>

      {/* ------------ PROJECTS ------------ */}
      <div id="projects" className="projets-section">
        <div className="projects-section-title">Projects</div>
        {/* AROSAJE */}
        <div className="project-container">
          <div className="project-texts">
            <span className="project-year">2023</span>
            <span className="project-name">Aro'saje</span>
            <span className="project-description">
              I developed this project in collaboration with 3 other developers
              and a UX/UI designer. This mobile application allows users to have
              their plants looked after and get botanical advice from
              specialists. Developed in React Native, this application has some
              interesting features, including an interactive map display, direct
              messages and A.I. plant detection.
              <br />
              Developed at school, it's now one of my most accomplished
              projects. The application isn't finished yet and we're working
              hard to make it even better.
            </span>
          </div>
          <a
            href="https://github.com/MatisGalvin/msprArosaje"
            className="project-img"
          >
            <img
              src={require("../../assets/img/projects/arosaje-cover.png")}
              alt=""
            />
          </a>
        </div>
        {/* CAVE */}
        <div className="project-container">
          <a
            href="https://github.com/workshop2022grp8/App_Mobile"
            className="project-img"
          >
            <img
              src={require("../../assets/img/projects/cave-cover.png")}
              alt=""
            />
          </a>
          <div className="project-texts">
            <span className="project-year">2022</span>
            <span className="project-name">C.A.V.E</span>
            <span className="project-description">
              C.A.V.E is another mobile application I developed for a
              competition at my school. Working in pairs with another developer,
              we had 3 days to develop a mobile application that could help
              agricultural workers. Here too, we developed the application in
              React Native for the cross-plateform advantage. C.A.V.E. is an
              application that allows winegrowers to share material resources,
              such as a tractor, with other winegrowers. <br />
              Thanks to an interactive map, they can see where the vehicles are
              located.
            </span>
          </div>
        </div>
        {/* WTN */}
        <div className="project-container">
          <div className="project-texts">
            <span className="project-year">2023</span>
            <span className="project-name">WhatTheNews?!</span>
            <span className="project-description">
              It's an application that I developed myself, to help me with my
              technology watch. WhatTheNews?! is connected to an automated
              system for retrieving blog articles related to a chosen subject,
              which the application then presents to the user so that he or she
              can decide whether or not to keep them by swiping left or right.{" "}
              <br />
              This application is still under development and aims to
              incorporate artificial intelligence to make it more relevant.
            </span>
          </div>
          <a
            href="https://github.com/antonin187/WhatTheNews"
            className="project-img"
          >
            <img
              src={require("../../assets/img/projects/wtn-cover.png")}
              alt=""
            />
          </a>
        </div>
      </div>

      {/* GITHUB */}
      {/* <div style={{ height: "20vh", backgroundColor: "white" }}></div> */}
      <div id="github" className="github-section">
        <div className="github-text-container">
          <span className="catch-it">Catch it !</span>
          <div className="visit-texts">
            <span className="uppercase visit-my">Visit my</span>
            <br />
            <span className="uppercase github-title">github</span>
          </div>
          <a
            href="https://github.com/antonin187"
            className="uppercase button-visit"
          >
            Visit
          </a>
          <div className="damier-container">
            <img src={require("../../assets/img/damier.png")} alt="" />
            <img src={require("../../assets/img/damier.png")} alt="" />
          </div>
        </div>

        <img
          className="black-stars star-desktop"
          style={{ position: "absolute", left: 400, top: 40 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-desktop"
          style={{ position: "absolute", right: 70, top: 80 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-desktop"
          style={{ position: "absolute", right: 150, bottom: 130 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-desktop"
          style={{ position: "absolute", right: 400, bottom: 100 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-desktop"
          style={{ position: "absolute", left: 300, bottom: 80 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-desktop"
          style={{ position: "absolute", left: 114, bottom: 230 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-desktop"
          style={{ position: "absolute", left: 80, top: 119 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />

        {/* STAR MOBILE */}
        <img
          className="black-stars star-mobile"
          style={{ position: "absolute", left: 80, top: 90 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-mobile"
          style={{ position: "absolute", left: 40, top: 300 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-mobile"
          style={{ position: "absolute", right: 80, top: 120 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-mobile"
          style={{ position: "absolute", left: 50, top: 530 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-mobile"
          style={{ position: "absolute", right: 40, top: 570 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-mobile"
          style={{ position: "absolute", right: 130, top: 540 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-mobile"
          style={{ position: "absolute", left: 120, bottom: 90 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-mobile"
          style={{ position: "absolute", right: 50, bottom: 80 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-mobile"
          style={{ position: "absolute", left: 30, bottom: 30 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        <img
          className="black-stars star-mobile"
          style={{ position: "absolute", left: 220, bottom: 55 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        />
        {/* <img
          className="black-stars star-mobile"
          style={{ position: "absolute", left: 80, top: 119 }}
          src={require("../../assets/img/star-black-small.png")}
          alt=""
        /> */}
        <img className="big-star" src={starSVG} alt="" />
      </div>

      {/* CONCLUSION */}
      <div className="conclusion">
        <div className="uppercase conclusion-title">
          <span>Hope you</span>
          <span>enjoyed</span>
          <span>the journey</span>
        </div>
        <div className="uppercase conclusion-subtitle">
          LET’S KEEP IN TOUCH, I PROMISE I’LL READ MY EMAILS
        </div>
        <a
          href="mailto:antonin7simon@gmail.com"
          className="uppercase button-email"
        >
          Email
        </a>
        {/* Colors stars */}
        <img
          src={require("../../assets/img/star-pink.png")}
          className="absolute stars-concl"
          style={{ width: 52, height: 52, top: 330, right: 475 }}
        />
        <img
          src={require("../../assets/img/star-pink.png")}
          className="absolute stars-concl"
          style={{ width: 52, height: 52, top: 360, left: 560 }}
        />
        <img
          src={require("../../assets/img/star-blue.png")}
          className="absolute stars-concl"
          style={{ width: 52, height: 52, top: 524, left: 360 }}
        />
        <img
          src={require("../../assets/img/star-blue.png")}
          className="absolute stars-concl"
          style={{ width: 52, height: 52, top: 600, left: 1020 }}
        />
        <img
          src={require("../../assets/img/star-yellow.png")}
          className="absolute stars-concl"
          style={{ width: 52, height: 52, top: 220, left: 450 }}
        />
        <img
          src={require("../../assets/img/star-yellow.png")}
          className="absolute stars-concl"
          style={{ width: 52, height: 52, top: 600, right: 440 }}
        />

        {/* White stars big */}
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 15, height: 15, top: 296, left: 348 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 15, height: 15, top: 320, left: 400 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 15, height: 15, top: 400, right: 440 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 15, height: 15, bottom: 300, right: 520 }}
        />

        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 15, height: 15, top: 720, left: 440 }}
        />

        {/* White stars small */}
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 230, left: 440 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 200, left: 900 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 510, right: 710 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 440, right: 470 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 650, right: 550 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 220, right: 190 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 380, left: 320 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 400, left: 470 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 210, right: 800 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 500, left: 630 }}
        />

        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 700, left: 470 }}
        />
        <img
          src={require("../../assets/img/star-white-no-outline.png")}
          className="absolute stars-concl"
          style={{ width: 10, height: 10, top: 750, left: 320 }}
        />

        <img
          src={require("../../assets/img/projects/arosaje-cover.png")}
          className="absolute concl-arosaje"
        />
        <img
          src={require("../../assets/img/projects/wtn-app.png")}
          className="absolute concl-wtn"
        />
        <img
          src={require("../../assets/img/projects/wtn-app.png")}
          className="absolute concl-wtn-mobile"
        />
        <img
          src={require("../../assets/img/antonin.jpeg")}
          className="absolute concl-antonin"
        />
      </div>
      <div className="bottom-navbar">
        <div className="sub-bottom-navbar">
          <a
            href="https://www.linkedin.com/in/antonin-simon/"
            className="uppercase bottom-links"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/antonin__simon/"
            className="uppercase bottom-links"
          >
            Instagram
          </a>
          <a href="tel:+33626771301" className="uppercase bottom-links">
            +33 6 26 77 13 01
          </a>
        </div>
        <div>
          <a href="#home" className="uppercase bottom-links section-links">
            Home
          </a>
          <a href="#skills" className="uppercase bottom-links section-links">
            Skills
          </a>
          <a href="#projects" className="uppercase bottom-links section-links">
            Projects
          </a>
          <a
            hhref="https://github.com/antonin187"
            className="uppercase bottom-links section-links"
          >
            Github
          </a>
        </div>
      </div>
      {/* <div className="who-am-i2">WhoAmI</div>
      <div className="who-am-i3">WhoAmI</div> */}
    </div>
  );
};

export default Home;
