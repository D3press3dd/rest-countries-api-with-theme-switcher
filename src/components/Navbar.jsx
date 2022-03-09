const Navbar = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="navbar">
      <p className="navbar__text">Where in the world?</p>
      <div className="navbar_theme-color">
        <div className="icon">
          {darkTheme ? (
            <ion-icon
              name="sunny-outline" //TODO probar con moon solo
              onClick={() => setDarkTheme(previous => !previous)}
            ></ion-icon>
          ) : (
            <ion-icon
              name="moon-outline"
              onClick={() => setDarkTheme(previous => !previous)}
              // className={}
            ></ion-icon>
          )}
        </div>
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
