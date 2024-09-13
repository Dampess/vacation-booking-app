import React from "react";
import "./Filters.css";

const Filters = ({
  maxPrice,
  setMaxPrice,
  locationFilter,
  setLocationFilter,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="filters">
      <h3>Une idée sur votre prochaine destination ?</h3>
      <input
        type="text"
        placeholder="Rechercher un hôtel..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <label>
        <input
          type="number"
          value={maxPrice}
          placeholder="Entrez un prix maximum"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </label>

      <label>
        <input
          type="text"
          value={locationFilter}
          placeholder="Entrez une localisation"
          onChange={(e) => setLocationFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filters;
