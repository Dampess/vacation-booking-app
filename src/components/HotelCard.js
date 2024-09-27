import React from "react";
import { Link } from "react-router-dom";
import "./HotelCard.css";

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={`${process.env.PUBLIC_URL}${hotel.imageUrl}`} alt={hotel.name} className="hotel-image" />
      <div className="hotel-details">
        <h3 style={{ fontWeight: "bold" }}>{hotel.name}</h3>
        <p style={{ fontWeight: "600" }}>{hotel.location}</p>
        <p>{hotel.description}</p>
        <p style={{ fontWeight: "bold" }}>Prix par nuit: {hotel.price}€</p>
        <div className="button-container">
          <Link to={`/reservation/${hotel.id}`}>
            <button className="book-button">Réserver</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
