import "./App.scss";
import { Route, Routes } from "react-router-dom";
import MenuHeader from "./components/header/MenuHeader";
import Rrss from "./components/footer/rrss/Rrss";
import Welcome from "./components/header/Welcome";
import NewJob from "./components/main/About/NewJob";
import About from "./components/main/About/About";
import Contact from "./components/main/Contact/Contact";
import SelectedWorks from "./components/main/SelectedWorks/SelectedWorks";

function App() {
  return (
    <div>
      <MenuHeader />
      <Routes>
        <Route
          path="/"
          element={
            <section className="c-block c-block-header">
              <Welcome />
            </section>
          }
        />
        <Route
          path="/about"
          element={
            <section className="c-block">
              <NewJob /> <About />
            </section>
          }
        />
        <Route
          path="contacto"
          element={
            <section className="c-block">
              <Contact />
            </section>
          }
        />
        <Route
          path="/trabajos-seleccionados"
          element={
            <section className="c-block">
              <SelectedWorks />
            </section>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
