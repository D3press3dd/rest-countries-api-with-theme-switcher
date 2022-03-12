////////////////////////
////////////////////////
////////////////////////
////////////////////////

export const fetchingDetails = async (name = "venezuela") => {
  const url = `https://restcountries.com/v3.1/name/${name}`;

  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`An error has occured: ${response.status}`);
  }
};
