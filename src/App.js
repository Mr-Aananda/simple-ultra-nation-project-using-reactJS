import "./App.css";
import { useEffect, useState } from "react";
import Country from "./components/Country/Country";
import SelectedCountries from "./components/SelectedCountries/SelectedCountries";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountirs] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddCountry = (country) => {
    const newSelectedCountries = [...selectedCountries, country];
    setSelectedCountirs(newSelectedCountries);
  };
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h3>Country Added:{selectedCountries.length} </h3>
      <SelectedCountries
        selectedCountries={selectedCountries}
      ></SelectedCountries>
      <ul>
        {countries.map((country) => (
          <Country
            country={country}
            handleAddCountry={handleAddCountry}
            key={country.alpha3Code}
          ></Country>
        ))}
      </ul>
    </div>
  );
}

export default App;
