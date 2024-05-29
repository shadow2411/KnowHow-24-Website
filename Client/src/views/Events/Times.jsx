import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import Header, { HeadingExtra, Card, Footer } from "../../Common";
import { TeamCard } from "../Team";

export default function Times() {
  const div = [
    {
      id: 1,
      title_extra: "1: EditorIQ",
      text: "An online Audio/Video link based quiz will test the participants' ideology and ethics",
      h: "25vh",
    },
    {
      id: 2,
      title_extra: "2: Surprise Round",
      text: "Aaj tak... Kal tak... Kab tak...?",
      h: "25vh",
    },
    {
      id: 3,
      title_extra: "3: Pen Prodigy",
      text: "Participants will have to write an article based on a given real-life incidents, they will be tested according to their creativity, word limit, spelling and grammar.",
      h: "25vh",
    },
    {
      id: 4,
      title_extra: "4: Gyral Symposium",
      text: "Participants will perform rotating journalism, where each will ask questions(2 max.) to one of them, which will then continue for rest of the group, then the jury will ask the questions.",
      h: "25vh",
    },
  ];

  const manager = [
    {
      id: 8,
      img: "Website photos/8.JPG",
      name: "Aatman Patel",
      dept: "+91 9664757168",
    },
    {
      id: 3,
      img: "Website photos/3.JPG",
      name: "Ditsa Chavda",
      dept: "+91 8200554764",
    },
    {
      id: 1,
      img: "Website photos/1.JPG",
      name: "Raag Joshi",
      dept: "+91 6354907604",
    },
    {
      id: 4,
      img: "Website photos/11.JPG",
      name: "Nirbhay Thakkar",
      dept: "+91 8141925021",
    },
    {
      id: 19,
      img: "Website photos/19.JPG",
      name: "Anusha Kar",
      dept: "+91 8320391343",
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
      <HeadingExtra text="आलोचना आगमन" />
      <div className="container text-center">
        <TypeAnimation
          sequence={[
            "Penning Dreams,",
            1000,
            "Penning Dreams, Inking Reality",
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
