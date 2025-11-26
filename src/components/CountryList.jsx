import CountryItem from "./CountryItem";

function CountryList({country, filterText}) {
    const filteredList = country.filter(eachCountry => eachCountry.name.toLowerCase().includes(filterText.toLowerCase()) || 
    eachCountry.capital.toLowerCase().includes(filterText.toLowerCase()));

  return (

    <ul className="country-list">
        {filteredList.map ((eachCountry) => (
            <CountryItem
            key={eachCountry.id}
            name={eachCountry.name}
            capital={eachCountry.capital}
            flag={eachCountry.flag}
            />
    ))}
    </ul>
  );
}

export default CountryList;