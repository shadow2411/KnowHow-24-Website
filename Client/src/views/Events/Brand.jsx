import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import Header, { HeadingExtra, Card, Footer } from "../../Common";
import { TeamCard } from "../Team";

export default function Brand() {
  const div = [
    {
      id: 1,
      title_extra: "1: Design Prism",
      text: "Participants have to submit a brochure based on the given domain online. A unique logo or tagline can be included.",
      h: "25vh",
    },
    {
      id: 2,
      title_extra: "2: Ad Mingle",
      text: "Craft a 2-minute advertisement for your domain. Must have a 30s PRE ad, 60s MAIN add skit and a 30s POST ad with a tagline. Creativity is the key criteria.",
      h: "25vh",
    },
    {
      id: 3,
      title_extra: "3: Prosper Pitch",
      text: "Pitch the final idea about the expansion of your product into a franchise. Convince the jury for the investment.",
      h: "25vh",
    },
  ];

  const manager = [
    {
      id: 4,
      img: "Website photos/4.JPG",
      name: "Umang Raichura",
      dept: "+91 9426420919",
    },
    {
      id: 15,
      img: "Website photos/15.JPG",
      name: "Vedant Soni",
      dept: "+91 9898262603",
    },
    {
      id: 12,
      img: "Website photos/12.JPG",
      name: "Rohan Warrier",
      dept: "+91 9824694326",
    },
    {
      id: 9,
      img: "Website photos/9.JPG",
      name: "Sakshi Trivedi",
      dept: "+91 8200185410",
    },
    {
      id: 13,
      img: "Website photos/13.JPG",
      name: "Manav Doshi",
      dept: "+91 9427902447",
    },
  ];

  const listDiv = div.map((d) => (
    <div key={d.id} className="col-sm m-3" data-aos="zoom-in">
      <Card card={d} />
    </div>
  ));

  const listManager = manager.map((m) => (
    <Fragment key={m.id}>
      <TeamCard card={m} width="33vh" imgwidth="30vh" data-aos="zoom-in" />
    </Fragment>
  ));

  const brand = {
    img: "",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="event">
      <Header />
      <br />
      <br />
      <HeadingExtra text="कल्पः कौशल" />
      <div className="container text-center">
        <TypeAnimation
          sequence={[
            "Innovate,",
            1000,
            "Innovate, Create,",
            1000,
            "Innovate, Create, Elevate",
            1000,
          ]}
          wrapper="span"
          speed={10}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={1}
        />
      </div>
      <br />
      <div className="container">
        <div className="row justify-content-center mt-4 mx-2">{listDiv}</div>
      </div>
      <br />
      <br />
      <HeadingExtra text="Event Managers" />
      <div className="container text-center">
        <div className="row align-items-center justify-content-center">
          {listManager}
        </div>
      </div>
      <Footer />
    </div>
  );
}
