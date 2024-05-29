import axios from "axios";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import Header, { HeadingExtra, Footer } from "../Common";

export default function Register() {
  const [upi, setUPI] = useState("Cash");
  const [partner, setPartner] = useState("");
  const [form, setForm] = useState({
    AY: "",
    amount: 0,
    eventE1: "",
    eventE2: "",
    eventE3: "",
    eventE4: "",
    gender: "",
    participant_address: "",
    participant_clgID: "",
    participant_email: "",
    participant_name: "",
    participant_number: 0,
    partner_clgID: "",
    partner_name: "",
    passkey: "",
    payment_Method: "",
    transaction_number: 0,
  });
  const [image, setImage] = useState();

  const navigate = useNavigate();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  const sendForm = async () => {
    let combined = null;
    if (image) {
      combined = {
        ...form,
        file: await toBase64(image),
      };
    } else {
      combined = {
        ...form,
      };
    }
    await axios
      .post(
        "http://localhost:3000/add-participant",
        {
          form: combined,
        }
      )
      .then(function (response) {
        if (response.data.success) {
          navigate("/Receipt", {
            state: {
              form: form,
              reg: response.data.registration_id,
            },
          });
        } else {
          alert("Please Enter Valid Password");
        }
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendForm();
  };

  const handleChange = (event) => {
    var { name, value, files } = event.target;
    if (event.target.type == "file" && event.target.id == "UPI_Image") {
      setImage(files[0]);
    } else {
      if (event.target.id == "eventE1") {
        if (event.target.checked) {
          value = "E1";
        } else {
          value = "";
        }
      }
      if (event.target.id == "eventE2") {
        if (event.target.checked) {
          value = "E2";
        } else {
          value = "";
        }
      }
      if (event.target.id == "eventE3") {
        if (event.target.checked) {
          value = "E3";
        } else {
          value = "";
        }
      }
      if (event.target.id == "eventE4") {
        if (event.target.checked) {
          value = "E4";
        } else {
          value = "";
        }
      }

      if (event.target.id == "eventE4") {
        setPartner(!partner);
      }

      if (event.target.id == "upi" || event.target.id == "cash") {
        setUPI(event.target.value);
      }

      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div id="register" style={{ width: "100%" }}>
      <Header />
      <br />
      <HeadingExtra text="Event Registration" />
      <br />
      <div className="container" data-aos="zoom-in">
        <form
          id="registrationForm"
          className="row"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="col-md-6 my-3 px-5">
            <label htmlFor="participant_name" className="my-1 form-label">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="participant_name"
              className="form-control"
              name="participant_name"
              required
            />
          </div>
          <div className="col-md-6 my-3 px-5">
            <label htmlFor="participant_clgID" className="my-1 form-label">
              College ID
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="participant_clgID"
              className="form-control"
              name="participant_clgID"
              required
            />
          </div>
          <div className="col-md-6 my-3 px-5">
            <label htmlFor="participant_email" className="my-1 form-label">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="participant_email"
              className="form-control"
              name="participant_email"
              required
            />
          </div>
          <div className="col-md-6 my-3 px-5">
            <label htmlFor="participant_number" className="my-1 form-label">
              Mobile number
            </label>
            <input
              onChange={handleChange}
              type="tel"
              id="participant_number"
              className="form-control"
              name="participant_number"
              pattern="[6789][0-9]{9}"
              required
            />
          </div>
          <div className="col-md-6 my-3 px-5">
            <label htmlFor="participant_address" className="my-1 form-label">
              Address
            </label>
            <textarea
              onChange={handleChange}
              type="text"
              id="participant_address"
              className="form-control"
              name="participant_address"
              required
            />
          </div>
          <div className="col-md-6 my-3 px-5">
            Gender
            <br />
            <div className="container">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
              />
              <label className="m-1 form-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="container">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                id="female"
                name="gender"
                value="female"
                required
              />
              <label className="m-1 form-label" htmlFor="female">
                Female
              </label>
            </div>
            <div className="container">
              <input
                onChange={handleChange}
                className="form-check-input"
                type="radio"
                id="other"
                name="gender"
                value="other"
                required
              />
              <label className="m-1 form-label" htmlFor="other">
                Other
              </label>
            </div>
          </div>
          <div className="col-md-6 my-3 px-5">
            Year of Study
            <div className="container">
              <input
                onChange={handleChange}
                type="radio"
                id="FY"
                className="form-check-input"
                name="AY"
                value="FY"
                required
              />
              <label className="m-1 form-label" htmlFor="FY">
                First Year
              </label>
            </div>
            <div className="container">
              <input
                onChange={handleChange}
                type="radio"
                id="SY"
                className="form-check-input"
                name="AY"
                value="SY"
                required
              />
              <label className="m-1 form-label" htmlFor="SY">
                Second Year
              </label>
            </div>
            <div className="container">
              <input
                onChange={handleChange}
                type="radio"
                id="TY"
                className="form-check-input"
                name="AY"
                value="TY"
                required
              />
              <label className="m-1 form-label" htmlFor="TY">
                Third Year
              </label>
            </div>
            <div className="container">
              <input
                onChange={handleChange}
                type="radio"
                id="FNY"
                className="form-check-input"
                name="AY"
                value="FNY"
                required
              />
              <label className="m-1 form-label" htmlFor="FNY">
                Final Year
              </label>
            </div>
            <div className="container">
              <input
                onChange={handleChange}
                type="radio"
                id="Mtech"
                className="form-check-input"
                name="AY"
                value="Mtech"
                required
              />
              <label className="m-1 form-label" htmlFor="Mtech">
                M.Tech
              </label>
            </div>
          </div>
          <div className="col-md-6 my-3 px-5">
            Chosen Events
            <div className="container">
              <input
                onChange={handleChange}
                type="checkbox"
                id="eventE1"
                className="form-check-input"
                name="eventE1"
                value="E1"
              />
              <label className="m-1 form-label" htmlFor="eventE1">
                श्रेष्ठि संवादः
              </label>
            </div>
            <div className="container">
              <input
                onChange={handleChange}
                type="checkbox"
                id="eventE2"
                className="form-check-input"
                name="eventE2"
                value="E2"
              />
              <label className="m-1 form-label" htmlFor="eventE2">
                नियुक्तिपथ
              </label>
            </div>
            <div className="container">
              <input
                onChange={handleChange}
                type="checkbox"
                id="eventE3"
                className="form-check-input"
                name="eventE3"
                value="E3"
              />
              <label className="m-1 form-label" htmlFor="eventE3">
                आलोचना आगमन
              </label>
            </div>
            <div className="container">
              <input
                onChange={handleChange}
                type="checkbox"
                id="eventE4"
                className="form-check-input"
                name="eventE4"
                value="E4"
              />
              <label className="m-1 form-label" htmlFor="eventE4">
                कल्पः कौशल
              </label>
            </div>
          </div>
          {partner && (
            <>
              <div className="col-md-6 my-3 px-5">
                <label className="my-1 form-label" htmlFor="partner">
                  Partner's Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="partner_name"
                />
              </div>
              <div className="col-md-6 my-3 px-5">
                <label className="my-1 form-label" htmlFor="partner">
                  Partner's ID
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="partner_clgID"
                />
              </div>
            </>
          )}
          <div className="col-md-6 my-3 px-5">
            Payment Method
            <div className="container">
              <input
                onChange={handleChange}
                type="radio"
                id="cash"
                className="form-check-input"
                name="payment_Method"
                value="Cash"
                required
              />
              <label className="m-1 form-label" htmlFor="cash">
                Cash
              </label>
            </div>
            <div className="container">
              <input
                onChange={handleChange}
                type="radio"
                id="upi"
                className="form-check-input"
                name="payment_Method"
                value="UPI"
                required
              />
              <label className="m-1 form-label" htmlFor="upi">
                UPI
              </label>
            </div>
          </div>
          {upi == "UPI" && (
            <>
              <div className="col-md-6 my-3 px-5">
                <label className="my-1 form-label" htmlFor="UPI_Image">
                  Payment Screenshot
                </label>
                <input
                  onChange={handleChange}
                  type="file"
                  id="UPI_Image"
                  name="UPI_Image"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6 my-3 px-5">
                <label className="my-1 form-label" htmlFor="transaction_number">
                  UPI Transaction Number
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  id="transaction_number"
                  name="transaction_number"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6 my-3 px-5">
                <img
                  src="QR.png"
                  alt="QR code image"
                  id="UPI_Image"
                  className="img-thumbnail rounded"
                  style={{ width: "30vh", height: "40vh" }}
                />
              </div>
            </>
          )}
          <div className="col-md-6 my-3 px-5">
            <label className="my-1 form-label" htmlFor="amount">
              Total Amount
            </label>
            <input
              onChange={handleChange}
              type="text"
              id="amount"
              className="form-control"
              name="amount"
              required
            />
          </div>
          <div className="col-md-6 my-3 px-5">
            <label className="my-1 form-label" htmlFor="passkey">
              Passkey
            </label>
            <input
              onChange={handleChange}
              type="password"
              id="passkey"
              className="form-control"
              name="passkey"
              placeholder="By desk person..."
              required
            />
          </div>
          <div className="col-md-12 my-3 text-center">
            <button
              id="submit"
              className="btn rounded-4"
              type="submit"
              value="Register"
            >
              <h6 style={{ fontWeight: 600 }}>Submit</h6>
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
