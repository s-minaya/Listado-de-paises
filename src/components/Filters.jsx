

function Filters({filterText, setFilterText}) {
  

    const handleInputFilter= (ev) => {
        setFilterText(ev.target.value)
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
    </section>
  );
}

export default Filters;