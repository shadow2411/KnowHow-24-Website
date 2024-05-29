import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header, { HeadingExtra, Card, Footer } from "../Common";
import { TeamCard } from "./Team";

export default function About() {
  const desc = [
    {
      id: 1,
      title_extra: "Vision",
      text: "To provide pivotal support & develop long lasting relationship with the companies of domestic & global knowledge economy so that such companies visit to recruit talented final year students of our college yearly, with aim to provide bright and rewarding opportunities & career to them for the valuable contributions they make in growth of company after joining the offered jobs.",
      h: "15em",
    },
    {
      id: 2,
      title_extra: "Mission",
      text: "To place competent final year students of our college in global & domestic knowledge economy companies, subsequent to acquiring required technical education by highly qualified & experienced faculties through curriculum, co-curriculum & extra curriculum activities and to train on required soft skills, best human values, attitude for continuous learning in them so that they can later on work, manange & leads their organization in efficient & effective manner in global economy.",
      h: "15em",
    },
  ];

  const listDesc = desc.map((d) => (
    <div key={d.id} className="col-sm-7 my-3 mx-auto" data-aos="zoom-in">
      <Card card={d} />
    </div>
  ));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div id="about">
      <Header />
      <br />
      <HeadingExtra text="About Us" />
      <br />
      <div className="container">
        <div className="row mx-auto my-3" style={{width: "15em"}}>
          <img src="tnp_logo.png" alt="tnp logo" />
        </div>
        <div className="row">{listDesc}</div>
      </div>
      <Footer />
    </div>
  );
}
