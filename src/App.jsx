import { useState, useEffect } from "react";
import Countries from "./components/Countries";
import Navbar from "./components/Navbar";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    darkTheme
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");
  }, [darkTheme]);

  return (
    <main>
      <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      <Countries />
    </main>
  );
}

export default App;
