import { Link } from "react-router-dom";
import { useEffect } from "react";

const Navbar = ({ darkTheme, setDarkTheme }) => {
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark-theme") {
      document.body.classList.add("dark-theme");
    } else if (localStorage.getItem("theme") === "light-theme") {
      document.body.classList.remove("dark-theme");
    }
  }, [darkTheme]);

  const setTheme = () => {
    setDarkTheme(previous => !previous);
    if (!darkTheme) {
      localStorage.setItem("theme", "dark-theme");
    } else {
      localStorage.setItem("theme", "light-theme");
    }
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar__text">
        Where in the world?
      </Link>
      <div className="navbar_theme-color">
        <div className="icon">
          <ion-icon
            name={
              localStorage.getItem("theme") === "dark-theme"
                ? "sunny-outline"
                : "moon-outline"
            }
            onClick={() => setTheme()}
          ></ion-icon>
        </div>
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
