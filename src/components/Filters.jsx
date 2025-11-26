function Filters() {
  return (
    <section className="filters">
      <label className="filters__label">
        Buscar país:
        <input
          type="text"
          className="filters__input"
          placeholder="Escribe un nombre..."
        />
      </label>
    </section>
  );
}

export default Filters;