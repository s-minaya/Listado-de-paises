

function Filters({filterText, setFilterText, filterContinent,setFilterContinent}) {
  

    const handleInputFilter= (ev) => {
        setFilterText(ev.target.value)
    }

    const handleContinentSelect = (ev) => {
        setFilterContinent(ev.target.value)
        console.log(ev.target.value);
        
    }

    
  return (
    <section className="filters">
      <label className="filters__label">
        Buscar país:
        <input
        onInput={handleInputFilter}
          type="text"
          className="filters__input"
          value= {filterText}
          placeholder="Escribe un nombre..."
        />
      </label>

        <label className="filters__label">
        Continente:
        <select
          className="filters__input"
          value={filterContinent}
          onChange={handleContinentSelect}
        >
          <option value="All" disabled>All</option>
          <option value="Africa">Africa</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>

    </section>
  );
}

export default Filters;