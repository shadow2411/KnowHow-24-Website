import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header, { Card, Footer } from "../Common";

export default function Result() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  const result = [
    {
      id: 1,
      title_extra: "नियुक्तिपथ",
      drive:
        "https://drive.google.com/drive/folders/1XQvJxrpDNJpLodYRACmA2IYG-v4WnW--?usp=sharing",
    },
    {
      id: 2,
      title_extra: "आलोचना आगमन",
      drive:
        "https://drive.google.com/drive/folders/1n28Cwe-Rvh-Ec_-YcBjRaE4RnRdhXNiU?usp=sharing",
    },
    {
      id: 3,
      title_extra: "श्रेष्ठि संवादः",
      drive:
        "https://drive.google.com/drive/folders/1L40tCwTwRStVcB4fLfbx0IvA_PFjuagN?usp=sharing",
    },
    {
      id: 4,
      title_extra: "कल्पः कौशल",
      drive:
        "https://drive.google.com/drive/folders/1JpwvZO-X3JkHrc_dcAtlS8qEPNcDTi0V?usp=sharing",
    },
    {
      id: 5,
      title_extra: "Mr. & Ms. KnowHow'24",
      drive:
        "https://drive.google.com/drive/folders/1o6nMFTtLi7VeafvpK5OaKEb8Q3PtxyWd?usp=sharing",
    },
  ];

  const listResult = result.map((r) => (
    <div
      className="col-12 my-4 mx-5 px-5"
      key={r.id}
      style={{ width: "70vh" }}
      data-aos="zoom-in"
    >
      <Card card={r} />
    </div>
  ));

  return (
    <div id="result">
      <Header />
      <br />
      <h3 id="heading" className="my-3 text-center">
        Results
      </h3>
      <div className="container text-center">
        <div className="row align-items-center justify-content-center mt-5">
          {listResult}
        </div>
      </div>
      <Footer />
    </div>
  );
}
