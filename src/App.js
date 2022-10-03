import "./App.scss";

import Welcome from "./components/header/Welcome";
import SelectedWorks from "./components/main/SelectedWorks";
function App() {
  return (
    <>
      <header>
        <Welcome />
      </header>
      <SelectedWorks />
    </>
  );
}

export default App;
