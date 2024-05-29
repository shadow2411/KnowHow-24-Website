import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header, { HeadingExtra, Card, Footer } from "../Common.jsx";
import "../style/theme.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  const desc = {
    id: 2,
    title_extra: "About KnowHow",
    text: "Welcome to KnowHow'24, a Flagship Fest organized by the Training and Placement Cell, BVM; which is amalgamated with Eutopian landscape.",
    extra_space: "Yes",
    data: "Eutopia is where the students engage in scholarly discourse, envisioning a world of prosperity, equality, and innovation. Together, let's embark on this journey towards professional excellence and the realization of Eutopia. Join us at KnowHow'24!",
  };

  return (
    <div className="home">
      <Header />
      <br />
      <br />
      <div className="row text-center mx-3" data-aos="zoom-in">
        <TypeAnimation
          sequence={[
            "Eutopian Mastery :",
            1500,
            "Eutopian Mastery : Where skills",
            1500,
            "Eutopian Mastery : Where skills and Success converge",
            1500,
          ]}
          wrapper="span"
          speed={10}
          style={{ fontSize: "1.2em", display: "inline-block" }}
          repeat={1}
        />
      </div>
      <div className="container text-center">
        <div className="row my-4 mx-2 align-items-center justify-content-center">
          <div
            key={desc.id}
            id="desc"
            className="col-sm-6 mx-4 mt-4"
            data-aos="zoom-in"
          >
            <Card card={desc} />
          </div>
          {/* <iframe
            id="trailer"
            data-aos="zoom-in"
            // width="560"
            // height="100%"
            style={{ height: "30vh", width: "50vh" }}
            className="col-sm mx-4 mt-2 rounded-4"
            src="https://www.youtube.com/embed/KaQUDZAW8vI?si=f_ZVqec_jERtkQ4C"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
        </div>
        <div
          className="row mx-1 mt-5 shadow rounded-4"
          data-aos="zoom-in"
          id="schedule"
        >
          <br />
          <HeadingExtra text="Schedule of Events" />
          <img
            src="schedule.PNG"
            id="schedule-img"
            className="col py-1 p-1 rounded-4"
            alt="..."
          />
        </div>
      </div>
      <br />
      <div className="conatiner mt-4">
        <div
          className="row text-center mx-auto"
          data-aos="zoom-in"
          style={{ width: "40vw" }}
        >
          <HeadingExtra text="Contact Us" />
          <div className="col-6 my-2">
            <a
              type="button"
              className="link-primary"
              href="https://www.linkedin.com/in/bvmcollege/"
              aria-label="To linkedin of bvm"
              target="_blank"
            >
              <h1>
                <i className="bi bi-linkedin"></i>
              </h1>
            </a>
          </div>
          <div className="col-6 my-2">
            <a
              type="button"
              className="link-danger"
              href="mailto:knowhowbvm24@gmail.com"
              aria-label="To knowhow mail"
              target="_blank"
            >
              <h1>
                <i className="bi bi-envelope-at-fill"></i>
              </h1>
            </a>
          </div>
          <br />
          <br />
          <br />
          <br />
          <HeadingExtra text="Follow us on" />
          <div className="col-6 my-2">
            <a
              type="button"
              className="link-danger"
              href="https://www.instagram.com/bvmtpc/"
              aria-label="To tpc instagram"
              target="_blank"
            >
              <h1>
                <i className="bi bi-instagram"></i>
              </h1>
            </a>
          </div>
          <div className="col-6 my-2">
            <a
              type="button"
              className="link-danger"
              href="https://www.youtube.com/@bvmtpc"
              aria-label="To tpc youtube channel"
              target="_blank"
            >
              <h1>
                <i className="bi bi-youtube"></i>
              </h1>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
