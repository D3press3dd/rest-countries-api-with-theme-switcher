import { Link } from "react-router-dom";
import LeftArrow from "../img/arrow-back-outline.svg";

const CountryDetails = () => {
  return (
    <>
      <div className="country-back-btn">
        <Link className="country-back-word" to="/">
          Back
        </Link>
        <img
          className="left-arrow"
          src={LeftArrow}
          alt="left arrow button image"
        />
      </div>

      {/* separator */}
      {/* separator */}
      {/* separator */}
      <div className="country__details-container">
        <div className="country__details-img-container">
          <img
            className="country__details-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/200px-Flag_of_Venezuela.svg.png"
            alt="bandera de venezuela"
          />
        </div>
        {/* separator */}
        {/* separator */}
        {/* separator */}
        <div className="country__details-right-info">
          <h1>hola</h1>
          <div className="country-details-middle-text">
            <div>
              <p>
                Native Name:<span>Belgie</span>
              </p>
              <p>
                Population:<span>11.23123.213.</span>
              </p>
              <p>
                Region:<span>Belgie</span>
              </p>
              <p>
                Sub Region:<span>Belgie</span>
              </p>
              <p>
                capital:<span>Bruselas</span>
              </p>
            </div>
            <div>
              <p>
                Region:<span>Belgie</span>
              </p>
              <p>
                Sub Region:<span>Belgie</span>
              </p>
              <p>
                Language:
                <span>
                  hablo 3 malparidos idiomas asi que cuidado con lo que haces
                </span>
              </p>
            </div>
          </div>
          <div className="country-details-borders-text">
            <p>Border Countries</p>
            <p>francia</p>
            <p>venezuela</p>
            <p>paris</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
