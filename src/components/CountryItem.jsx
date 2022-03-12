import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const CountryItem = ({ country, index }) => {
  const infoCountry = {
    name: country.name.common,
    population: country.population,
    region: country.region,
    capital: country.capital || "No capital Found",
    subRegion: country.subregion,
    currencies: country.currencies,
    languages: country.languages,
    borderCountries: country.borders,
    countryImage: country.flags.svg,
  };

  return (
    <motion.div
      className="country-card"
      initial={{
        opacity: 0,
        translateX: -500,
        rotate: 15,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
        rotate: 0,
      }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
      }}
    >
      <div className="country-image">
        <Link to={`/details/${infoCountry.name}`}>
          <img
            src={infoCountry.countryImage}
            alt={infoCountry.name + " flag"}
          />
        </Link>
      </div>
      <div className="country-text">
        <Link to={`/details/${infoCountry.name}`} className="link">
          <p className="country-name">{infoCountry.name}</p>
        </Link>
        <p className="country-info">
          Population:<span>{" " + infoCountry.population}</span>
        </p>
        <p className="country-info">
          Region: <span> {" " + infoCountry.region}</span>
        </p>
        <p className="country-info">
          Capital:
          <span>{" " + infoCountry.capital}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default CountryItem;
