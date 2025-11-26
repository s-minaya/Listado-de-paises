import CountryItem from "./CountryItem";

function CountryList({country, filterText, filterContinent}) {
    const filteredList = country.filter(eachCountry => eachCountry.name.toLowerCase().includes(filterText.toLowerCase()) || 
    eachCountry.capital.toLowerCase().includes(filterText.toLowerCase()) || eachCountry.continent.toLowerCase().includes(filterText.toLowerCase()));

    const filteredContinent = country.filter(eachCountry => eachCountry.continent.toLowerCase().includes(filterContinent.toLowerCase()))

  return (

    <ul className="country-list">
        {filteredList.map && filteredContinent.map ((eachCountry) => (
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