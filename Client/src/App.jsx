import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import Team from "./views/Team";
import Result from "./views/Result";
import Receipt from "./views/Receipt";
import About from "./views/About";
import Corporate from "./views/Events/Corporate";
import Times from "./views/Events/Times";
import SOC from "./views/Events/SOC";
import Brand from "./views/Events/Brand";

export default function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Receipt" element={<Receipt />} />
        <Route path="/About" element={<About />} />
        <Route path="/श्रेष्ठि संवादः" element={<SOC />} />
        <Route path="/कल्पः कौशल" element={<Brand />} />
        <Route path="/आलोचना आगमन" element={<Times />} />
        <Route path="/नियुक्तिपथ" element={<Corporate />} />
      </Routes>
    </HashRouter>
  );
}
