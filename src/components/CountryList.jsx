import CountryItem from "./CountryItem";

function CountryList({country}) {
  return (

    <ul className="country-list">
        {country.map ((eachCountry) => (
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