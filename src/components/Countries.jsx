import { useState, useEffect } from "react";
import { idGenerator } from "../helpers/idGenerator";
import { initialRegion } from "../helpers/initialRegion";
import CountryItem from "./CountryItem";
import { useFetchData } from "../hooks/useFetchData";

const Countries = () => {
  const url = "https://restcountries.com/v3.1/all";
  const { data: countries, error } = useFetchData(url);
  const [selectedByRegion, setSelectedByRegion] = useState([]);
  const [filtrandoPaises, setFiltrandoPaises] = useState([...countries]);

  useEffect(() => {
    setFiltrandoPaises(filterByRegion(selectedByRegion));
  }, [selectedByRegion]);

  // SELECCIONANDO REGION Y SETEANDOLA AL ESTADO⬇⬇⬇⬇
  const handleSelectedRegion = e => {
    setSelectedByRegion(e.target.value);
  };

  // FILTRANDO LOS PAISES POR REGION⬇⬇⬇⬇

  const filterByRegion = (selectedByRegion = "All") => {
    if (selectedByRegion === "All") {
      return countries;
    } else {
      return countries.filter(country => country.region === selectedByRegion);
    }
  };

  // FILTRANDO LOS PAISES POR TEXTO⬇⬇⬇⬇

  const handleCountryByText = e => {
    const searchingCountriesByText = e.target.value.toLowerCase();
    if (searchingCountriesByText.length > 1) {
      setFiltrandoPaises(
        countries.filter(country =>
          country.name.common.toLowerCase().includes(searchingCountriesByText)
        )
      );
    }
  };

  ////////////////////////////////////////////////////////
  return (
    <>
      <div className="countries-select">
        <div className="countries-search">
          <ion-icon name="search-outline" id="lupa"></ion-icon>
          <input
            name="individualCountry"
            type="text"
            placeholder="Search for a country..."
            className="country-input"
            autoComplete="off"
            onChange={e => handleCountryByText(e)}
          />
        </div>
        <div>
          <select
            onChange={e => handleSelectedRegion(e)}
            className="select"
            defaultValue={""}
          >
            <option className="option" value="" disabled>
              Filter by Region
            </option>
            {initialRegion.map(region => {
              return (
                <option
                  className="option"
                  key={region.name}
                  value={region.value}
                >
                  {region.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="country-container-grid">
        {filtrandoPaises.map((country, index) => {
          return (
            <CountryItem key={idGenerator()} country={country} index={index} />
          );
        })}
      </div>
    </>
  );
};

export default Countries;
