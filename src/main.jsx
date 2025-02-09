import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import ButtonTap from "./components/ButtonTap";
import Counter from "./components/Counter";
import KeyFrame from "./components/KeyFrame";
import ScrollReveal from "./components/ScrollReveal";
import Simple from "./components/Simple";
import TransitionType from "./components/TransitionType";
import TextMotion from "./components/TextMotion";
import Variants from "./components/Variants";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Simple />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/key-frame" element={<KeyFrame />} />
        <Route path="/button-tap" element={<ButtonTap />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/scroll-reveal" element={<ScrollReveal />} />
        <Route path="/text-motion" element={<TextMotion />} />
        <Route path="/transition-type" element={<TransitionType />} />
        <Route path="/variants" element={<Variants />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
