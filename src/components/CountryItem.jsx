function CountryItem({name, capital, flag}) {
  return (
    <li className="country-list__item">
      <span className="country-list__flag">{flag}</span>
      <span className="country-list__name">{name}</span>
      <span className="country-list__capital">{capital}</span>
    </li>
  );
}

export default CountryItem;