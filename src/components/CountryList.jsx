import CountryItem from "./CountryItem";

function CountryList({country, filterText, filterContinent}) {
      let filteredList = country.filter(eachCountry =>
    eachCountry.name.toLowerCase().includes(filterText.toLowerCase()) ||
    eachCountry.capital.toLowerCase().includes(filterText.toLowerCase()) ||
    eachCountry.continent.toLowerCase().includes(filterText.toLowerCase())
  );

      if (filterContinent !== "") {
    filteredList = filteredList.filter(
      eachCountry => eachCountry.continent === filterContinent
    );
  }

    

  return (

    <ul className="country-list">
        {filteredList.map ((eachCountry) => (
            <CountryItem
            key={eachCountry.id}
            name={eachCountry.name}
            capital={eachCountry.capital}
            flag={eachCountry.flag}
            continent = {eachCountry.continent}
            />
    ))}
    </ul>
  );
}

export default CountryList;