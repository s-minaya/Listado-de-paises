function CountryItem({name, capital, flag, continent}) {
  return (
    <li className="country-list__item">
      <span className="country-list__flag">{flag}</span>
      <span className="country-list__name">{name}</span>
      <span className="country-list__capital">{capital}</span>
      <span className="country-list__continent">{continent}</span>
    </li>
  );
}

export default CountryItem;