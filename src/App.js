import "./App.scss";
import Rrss from "./components/footer/rrss/Rrss";

import Welcome from "./components/header/Welcome";
import Contact from "./components/main/Contact/Contact";
import SelectedWorks from "./components/main/SelectedWorks/SelectedWorks";
function App() {
  return (
    <>
      <header className="c-block">
        <Welcome />
      </header>
      <main className="c-block">
        {" "}
        <SelectedWorks />
        <Contact />
      </main>
      <footer className="c-block">
        <Rrss />
      </footer>
    </>
  );
}

export default App;
