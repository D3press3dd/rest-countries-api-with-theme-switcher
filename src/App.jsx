import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import Error404 from "./components/Error404";
import Navbar from "./components/Navbar";

function App() {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("theme") === "dark-theme" ? true : false
  );

  return (
    <main>
      <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />

      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="details" element={<CountryDetails />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
  );
}

//  document.body.classList.add("dark-theme")
//       : document.body.classList.remove

export default App;
