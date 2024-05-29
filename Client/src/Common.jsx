import { Link } from "react-router-dom";

export default function Header() {
  const bars = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "Register",
      link: "/Register",
    },
    {
      id: 3,
      name: "Our Team",
      link: "/Team",
    },
    {
      id: 4,
      name: "Result",
      link: "/Result",
    },
    {
      id: 5,
      name: "About Us",
      link: "/About",
    },
  ];

  const events = [
    {
      id: 1,
      name: "श्रेष्ठि संवादः",
      link: "/श्रेष्ठि संवादः",
    },
    {
      id: 2,
      name: "कल्पः कौशल",
      link: "/कल्पः कौशल",
    },
    {
      id: 3,
      name: "आलोचना आगमन",
      link: "/आलोचना आगमन",
    },
    {
      id: 4,
      name: "नियुक्तिपथ",
      link: "/नियुक्तिपथ",
    },
  ];

  const listBar = bars.map((b) => (
    <li key={b.id} className="nav-item mx-3">
      <Link className="nav-link" to={b.link} aria-label="to other pages">
        {b.name}
      </Link>
    </li>
  ));

  const listEvents = events.map((e) => (
    <li key={e.id} className="nav-item my-1">
      <Link
        className="dropdown-item"
        to={e.link}
        aria-label="to other events"
        style={{ fontWeight: "700" }}
      >
        {e.name}
      </Link>
    </li>
  ));

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-sm" id="all">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" aria-label="Back to home">
            <img
              src="right_logo.png"
              alt="logo"
              style={{ width: "4em", height: "auto" }}
            ></img>
          </Link>
          <Link
            className="navbar-brand me-5"
            to="/"
            aria-label="Back to home"
            style={{ color: "var(--white-gradient)" }}
          >
            <h2>KnowHow'24</h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>
          <div className="collapse navbar-collapse mx-2 my-2" id="navbarNav">
            <ul className="navbar-nav me-3" id="nav">
              {listBar}
              <li className="dropdown">
                <a
                  className="nav-link dropdown-toggle mx-3"
                  id="events"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events{" "}
                </a>
                <ul className="dropdown-menu">{listEvents}</ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export function HeadingExtra({ text }) {
  return (
    <h4
      id="heading_extra"
      className="my-3 text-center"
      style={{ fontWeight: "bold" }}
    >
      {text}
    </h4>
  );
}

export function Card({ card }) {
  return (
    <div
      id="card"
      className="container shadow rounded-4 py-4 px-4"
      style={{ minHeight: card.h }}
    >
      {card.title_extra && <HeadingExtra text={card.title_extra} />}
      {card.text}
      {card.extra_space && <br />}
      {card.data && (
        <>
          <br />
          {card.data}
        </>
      )}
      {card.drive && (
        <a
          id="drive"
          className="btn rounded-4"
          role="button"
          href={card.drive}
          target="_blank"
        >
          <h6>View Result</h6>
        </a>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <div className="position-relative">
      <div
        id="footer"
        className="mt-4 p-3 text-center postion-absolute bottom-0"
      >
        &copy; <b>KnowHow 2024</b>. All rights reserved.
      </div>
    </div>
  );
}
