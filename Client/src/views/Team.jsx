import { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header, { HeadingExtra, Footer } from "../Common";

export function TeamCard({ card, height, width, imgwidth }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      key={card.id}
      className="col-4 mx-5 my-4 p-2 align-items-center shadow rounded-5"
      style={{ width: width, height: height }}
      data-aos="zoom-in"
    >
      {card.img && (
        <img
          src={card.img}
          alt="team member photo"
          className="img-top rounded-4 m-1"
          style={{ width: imgwidth }}
        />
      )}
      <div className="container text-center">
        <div className="row">
          <div className="col-12 my-2">{card.name}</div>
          {card.dept && <div className="col-12 my-1">{card.dept}</div>}
          <div className="col-12 my-1">
            {card.email && (
              <a
                type="button"
                className="link-danger mx-4 mt-1"
                href={card.email}
                target="_blank"
              >
                <h3>
                  <i className="bi bi-envelope-at-fill"></i>
                </h3>
              </a>
            )}
            {card.linked && (
              <a
                type="button"
                className="link-primary mx-4"
                href={card.linked}
                target="_blank"
              >
                <h3>
                  <i className="bi bi-linkedin"></i>
                </h3>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const bvm = {
    id: 24,
    img: "Website photos/24.jpg",
    name: "Prof.(Dr) Indrajit Patel",
  };
  const cvm = {
    id: 25,
    img: "Website photos/25.png",
    name: "Er. Bhikhubhai Patel",
  };
  const sir = [
    {
      id: 21,
      img: "Website photos/21.JPG",
      name: "Prof. Mehul Patel",
      dept: "Training and Placement Officer",
      email: "mailto:Mrpatel@bvmengineering.ac.in",
      linked: "https://www.linkedin.com/in/mehul-patel-b77907240",
    },
    {
      id: 22,
      img: "Website photos/22.JPG",
      name: "Dr. Mehul Shah",
      dept: "Training and Placement Advisor",
      email: "mailto:mehul.shah@bvmengineering.ac.in",
      linkedin: "-",
    },
    {
      id: 23,
      img: "Website photos/23.JPG",
      name: "Dr. Robinson Paul",
      dept: "Training and Placement In-Charge",
      email: "mailto:robinson.paul@bvmengineering.ac.in",
      linked: "https://www.linkedin.com/in/dr-robinson-paul",
    },
  ];

  const members = [
    {
      id: 1,
      img: "Website photos/1.JPG",
      name: "Raag Joshi (CP)",
      email: "mailto:raagjoshi67@gmail.com",
      linked: "https://www.linkedin.com/in/raagjoshi67",
    },
    {
      id: 5,
      img: "Website photos/5.JPG",
      name: "Dhriti Shah (CP)",
      email: "mailto:dhriti180503@gmail.com",
      linked: "https://www.linkedin.com/in/dhriti-shah18",
    },
    {
      id: 6,
      img: "Website photos/6.JPG",
      name: "Manthan Kapadia (CP)",
      email: "mailto:manthank1911@gmail.com",
      linked: "https://www.linkedin.com/in/manthan-kapadia",
    },
    {
      id: 2,
      img: "Website photos/2.JPG",
      name: "Nisarg Patel (IT)",
      email: "mailto:ntpatel2411@gmail.com",
      linked: "https://www.linkedin.com/in/nisarg-patel-347948233",
    },
    {
      id: 17,
      img: "Website photos/17.JPG",
      name: "Khushi Rangoonwala (IT)",
      email: "mailto:khushirangoonwala@gmail.com",
      linked: "https://www.linkedin.com/in/khushi-rangoonwala-23738823a",
    },
    {
      id: 18,
      img: "Website photos/18.JPG",
      name: "Rudrarajsinh Gohil (IT)",
      email: "mailto:Rudrarajgohel27@gmail.com",
      linked: "https://www.linkedin.com/in/rudrarajsinh-gohil",
    },
    {
      id: 3,
      img: "Website photos/3.JPG",
      name: "Ditsa Chavda (CE)",
      email: "mailto:ditsachavda.xiib@gmail.com",
      linked: "https://www.linkedin.com/in/ditsa-chavda-3a283b237",
    },
    {
      id: 4,
      img: "Website photos/4.JPG",
      name: "Umang Raichura (CE)",
      email: "mailto:umangraichura21@gmail.com",
      linked: "https://www.linkedin.com/in/umang-raichura-0379a7223",
    },
    {
      id: 7,
      img: "Website photos/7.JPG",
      name: "Garvish Gurkha (EE)",
      email: "mailto:garvishgurkha@gmail.com",
      linked: "https://www.linkedin.com/in/garvish-gurkha-764433228",
    },
    {
      id: 8,
      img: "Website photos/8.JPG",
      name: "Aatman Sitapara (EE)",
      email: "mailto:aatmansitapara@gmail.com",
      linked: "https://www.linkedin.com/in/aatman-sitapara-734560234",
    },
    {
      id: 9,
      img: "Website photos/9.JPG",
      name: "Sakshi Trivedi (EL)",
      email: "mailto:sakshibtrivedi@gmail.com",
      linked: "https://www.linkedin.com/in/sakshi-trivedi-92b0b2233",
    },
    {
      id: 10,
      img: "Website photos/10.JPG",
      name: "Shrey Shah (EL)",
      email: "mailto:shrey6352@gmail.com",
      linked: "https://www.linkedin.com/in/shreyshah10",
    },
    {
      id: 11,
      img: "Website photos/11.JPG",
      name: "Nirbhay Thakkar (EL)",
      email: "mailto:nirbhay6555@gmail.com",
      linked: "https://www.linkedin.com/in/nirbhay-thakkar-270b0a21b",
    },
    {
      id: 13,
      img: "Website photos/13.JPG",
      name: "Manav Doshi (ME)",
      email: "mailto:manavdoshi97@gmail.com",
      linked: "https://www.linkedin.com/in/manav-doshi-5348b6257",
    },
    {
      id: 12,
      img: "Website photos/12.JPG",
      name: "Rohan Warrier (ME)",
      email: "mailto:warrierrohan6@gmail.com",
      linked: "https://www.linkedin.com/in/rohan-warrier-9883bb258",
    },
    {
      id: 15,
      img: "Website photos/15.JPG",
      name: "Vedant Soni (ME)",
      email: "mailto:vedantmsoni2004@gmail.com",
      linked: "https://www.linkedin.com/in/vedantmsoni",
    },
    {
      id: 14,
      img: "Website photos/14.JPG",
      name: "Vivekrajsinh Chudasama (ME)",
      email: "mailto:chudasamav555@gmail.com",
      linked: "https://www.linkedin.com/in/vivekrajsinh-chudasama-214118257",
    },
    {
      id: 16,
      img: "Website photos/16.JPG",
      name: "Mayur Mandviwala (PE)",
      email: "mailto:mayurmandviwala2001@gmail.com",
      linked: "https://www.linkedin.com/in/mayur-mandviwala-b2116a284",
    },
    {
      id: 19,
      img: "Website photos/19.JPG",
      name: "Anusha Kar (EC)",
      email: "mailto:anushaworks25@gmail.com",
      linked: "https://www.linkedin.com/in/anusha-kar-3b12a2271",
    },
    {
      id: 20,
      img: "Website photos/20.JPG",
      name: "Dhruv Lalpurwala (EC)",
      email: "mailto:lalpurwaladhruv@gmail.com",
      linked: "https://www.linkedin.com/in/dhruv-lalpurwala-566087249",
    },
  ];

  const listSir = sir.map((m) => (
    <Fragment key={m.id}>
      <TeamCard card={m} width="33vh" imgwidth="30vh" />
    </Fragment>
  ));

  const listTeam = members.map((m) => (
    <Fragment key={m.id}>
      <TeamCard card={m} width="33vh" imgwidth="30vh" />
    </Fragment>
  ));

  return (
    <div id="team">
      <Header />
      <br />
      <div className="container text-center my-4">
        <HeadingExtra text="Chairman CVM" />
        <TeamCard card={cvm} width="33vh" imgwidth="30vh" />
        <br />
        <HeadingExtra text="Principal BVM" />
        <TeamCard card={bvm} width="33vh" imgwidth="30vh" />
        <br />
        <HeadingExtra text="Team" />
        <div className="row align-items-center justify-content-center">
          {listSir}
        </div>
        <br />
        <br />
        <div className="row align-items-center justify-content-center">
          {listTeam}
        </div>
      </div>
      <Footer />
    </div>
  );
}
