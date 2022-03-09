import { useState } from "react";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <main className={darkTheme ? "dark-theme " : ""}>
      <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      <Countries />
    </main>
  );
}

export default App;
