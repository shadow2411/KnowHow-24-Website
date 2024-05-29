import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import Header, { HeadingExtra, Card, Footer } from "../../Common";
import { TeamCard } from "../Team";

export default function SOC() {
  const div = [
    {
      id: 1,
      title_extra: "1: Nobility Nomination",
      text: "Participant picks a profession and an aristocrat. Write a subjective essay about the chosen aristocrats containing good or bad points.",
      h: "25vh",
    },
    {
      id: 2,
      title_extra: "2: Alliances Bash",
      text: "Debate amongst aristocrats from the same profession. Candidate's public speaking, critical thinking and persuassion will be tested.",
      h: "25vh",
    },
    {
      id: 3,
      title_extra: "3: Surprise Round",
      text: "Can you trully EMBODY the aristocrat...?",
      h: "25vh",
    },
  ];

  const manager = [
    {
      id: 2,
      img: "Website photos/2.JPG",
      name: "Nisarg Patel",
      dept: "+91 9909595282",
    },
    {
      id: 7,
      img: "Website photos/7.JPG",
      name: "Garvish Gurkha",
      dept: "+91 9313561556",
    },
    {
      id: 14,
      img: "Website photos/14.JPG",
      name: "Vivekrajsinh Chudasama",
      dept: "+91 8780385556",
    },
    {
      id: 17,
      img: "Website photos/17.JPG",
      name: "Khushi Rangoonwala",
      dept: "+91 9316718540",
    },
    {
      id: 20,
      img: "Website photos/20.JPG",
      name: "Dhruv Lalpurwala",
      dept: "+91 9724825081",
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
      <HeadingExtra text="श्रेष्ठि संवादः" />
      <div className="container text-center">
        <TypeAnimation
          sequence={["Your Society,", 1000, "Your Society, Your Success", 1000]}
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
