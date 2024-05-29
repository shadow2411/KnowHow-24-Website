import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header, { Footer } from "../Common";

export default function Receipt() {
  const location = useLocation();
  const form = location.state.form;
  const reg = location.state.reg;
  let combo = false;

  if (
    form.eventE1 == "E1" &&
    form.eventE2 == "E2" &&
    form.eventE3 == "E3" &&
    form.eventE4 == "E4"
  ) {
    combo = true;
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <Header />
      <div
        className="invoice-container text-center"
        id="receipt"
        data-aos="zoom-in"
      >
        <table className="logo-table">
          <tbody>
            <tr>
              <td>
                <img
                  src="left_logo.png"
                  alt="Left Logo"
                  className="logo"
                  width="100"
                  height="100"
                />
              </td>
              <td>
                <h1 className="header">
                  <img
                    src="logo.png"
                    alt="MiddleLogo"
                    className="logo"
                    width="100"
                  />
                  <br />
                  Payment Receipt
                </h1>
              </td>
              <td>
                <img
                  src="right_logo.png"
                  alt="Right Logo"
                  className="logo"
                  width="150"
                  height="120"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="line"></div>
        <table>
          <tbody>
            <tr>
              <th className="event-name">Receipt No</th>
            </tr>
            <tr>
              <td>{reg}</td>
            </tr>
            <tr>
              <th className="event-name">Participant Name</th>
            </tr>
            <tr>
              <td>{form.participant_name}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th className="event-name">Event Name</th>
              <th className="event-name">Event Price</th>
            </tr>
            <tr>
              <td>श्रेष्ठि संवादः</td>
              {form.eventE1 == "E1" && <td>30.00</td>}
              {form.eventE1 == "" && <td>0.00</td>}
            </tr>
            <tr>
              <td>नियुक्तिपथ</td>
              {form.eventE2 == "E2" && <td>30.00</td>}
              {form.eventE2 == "" && <td>0.00</td>}
            </tr>
            <tr>
              <td>आलोचना आगमन</td>
              {form.eventE3 == "E3" && <td>30.00</td>}
              {form.eventE3 == "" && <td>0.00</td>}
            </tr>
            <tr>
              <td>कल्पः कौशल</td>
              {form.eventE4 == "E4" && <td>30.00</td>}
              {form.eventE4 == "" && <td>0.00</td>}
            </tr>
            <tr>
              <th className="event-name" colSpan="2">
                Combo Offer
              </th>
            </tr>
            <tr>
              {combo && <td colSpan="2">100.00</td>}
              {!combo && <td colSpan="2">No</td>}
            </tr>
            <tr>
              <th className="event-name" colSpan="2">
                Total Price
              </th>
            </tr>
            <tr>
              <td colSpan="2">{form.amount}</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4" style={{ fontWeight: "bold", fontSize: "13px" }}>
          For technical or Payment related queries:
          <br />
          <br />
          Nisarg Patel: +91 9909595282 <br />
          Raag Joshi: +91 6354907604
          <br /> Aatman Sitapara: +91 9664757168
        </p>
      </div>
      <Footer />
    </>
  );
}
