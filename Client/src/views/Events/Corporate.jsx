import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import Header, { HeadingExtra, Card, Footer } from "../../Common";
import { TeamCard } from "../Team";

export default function Corporate() {
  const div = [
    {
      id: 1,
      title_extra: "1: Aptitude Quest",
      text: "Participants will be given an online quiz in order to test and sharpen their aptitude and problem-solving skills. 50 questions, 30 minutes.",
      h: "25vh",
    },
    {
      id: 2,
      title_extra: "2: Group Discussion",
      text: "Participants engage in a collaborative brainstorming session on a given topic, followed by an 8-minute group discussion, fostering teamwork and yielding insightful outcomes.",
      h: "25vh",
    },
    {
      id: 3,
      title_extra: "3: Tech Interview",
      text: "Technical interview in which their proficiency, problem-solving skills, and industry-specific knowledge will be evaluated by the jury. Bring your CV/Resume",
      h: "25vh",
    },
    {
      id: 4,
      title_extra: "4: HR Interview",
      text: "Candidates' behaviour, confidence and personality will be evaluated by the jury. Bring your CV/Resume",
      h: "25vh",
    },
  ];

  const manager = [
    {
      id: 10,
      img: "Website photos/10.JPG",
      name: "Shrey Shah",
      dept: "+91 8347999801",
    },
    {
      id: 6,
      img: "Website photos/6.JPG",
      name: "Manthan Kapadia",
      dept: "+91 7574805755",
    },
    {
      id: 5,
      img: "Website photos/5.JPG",
      name: "Dhriti Shah",
      dept: "+91 9328135022",
    },
    {
      id: 18,
      img: "Website photos/18.JPG",
      name: "Rudrarajsinh Gohil",
      dept: "+91 9558651101",
    },
    {
      id: 16,
      img: "Website photos/16.JPG",
      name: "Mayur Mandviwala",
      dept: "+91 8469175611",
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
      <HeadingExtra text="नियुक्तिपथ" />
      <div className="container text-center">
        <TypeAnimation
          sequence={["Pathway", 1000, "Pathway to Prosperity", 1000]}
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
