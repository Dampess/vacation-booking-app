import React from "react";
import "./FlightList.css"; // Vous pouvez créer un fichier CSS pour styliser ce composant

const flights = [
  {
    id: 1,
    departure: "Paris, France",
    destination: "New York, USA",
    price: 800,
  },
  {
    id: 2,
    departure: "London, UK",
    destination: "Tokyo, Japan",
    price: 1200,
  },
  {
    id: 3,
    departure: "Berlin, Germany",
    destination: "Sydney, Australia",
    price: 1500,
  },
  {
    id: 4,
    departure: "Rome, Italy",
    destination: "Cape Town, South Africa",
    price: 1000,
  },
  {
    id: 5,
    departure: "Barcelona, Spain",
    destination: "Rio de Janeiro, Brazil",
    price: 1100,
  },
];

const FlightList = () => {
  return (
    <section className="flight-list">
      <h2>Vols Disponibles</h2>
      <div className="flight-grid">
        {flights.map((flight) => (
          <div key={flight.id} className="flight-card">
            <h3>
              {flight.departure} &rarr; {flight.destination}
            </h3>
            <p>Prix: ${flight.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlightList;
