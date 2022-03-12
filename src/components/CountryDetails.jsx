import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import LeftArrow from "../img/arrow-back-outline.svg";
import { fetchingDetails } from "../fetch/fetchingDetails";
import { useState } from "react";
import { initalCountryDetails } from "../helpers/initialCountryDetails";
/////////////////////////
/////////////////////////
/////////////////////////

const CountryDetails = () => {
  const [countryDetails, setCountryDetails] = useState(initalCountryDetails);
  const { countryName } = useParams();

  useEffect(() => {
    fetchingDetails(countryName).then(data => setCountryDetails(data));
  }, [countryName]);

  const [
    {
      name: { common },
      population,
      region,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      borders,
      flags: { svg },
    },
  ] = countryDetails;

  const currencieName = Object.entries(currencies).map(valor => valor[1].name);
  const allLanguages = Object.values(languages);

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
          id="arrow"
        />
      </div>

      <div className="country__details-container">
        <div className="country__details-img-container">
          <img
            className="country__details-img"
            src={svg}
            alt="bandera de venezuela"
          />
        </div>

        <div className="country__details-right-info">
          <h1>{common}</h1>
          <div className="country-details-middle-text">
            <div>
              <p>
                Native Name:<span>hola</span>
              </p>
              <p>
                Population:<span>{population}</span>
              </p>
              <p>
                Region:<span>{region}</span>
              </p>
              <p>
                Sub Region:<span>{subregion}</span>
              </p>
              <p>
                capital:
                <span>
                  {capital === undefined ? "Not capital Found" : capital}
                </span>
              </p>
            </div>
            <div>
              <p>
                Top level domain:<span>{tld}</span>
              </p>
              <p>
                Currencies:
                <span>{currencieName}</span>
              </p>
              <p>
                Language:
                {<span>{allLanguages.join()}</span>}
              </p>
            </div>
          </div>
          <div className="country-details-borders-text">
            <p>Border Countries</p>
            {borders
              ? borders.map(border => <p key={border + 2}>{border}</p>)
              : "Not Borders Found"}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetails;
