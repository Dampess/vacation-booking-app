import React from "react";
import HotelCard from "./HotelCard";
import "./BestDeals.css";

const BestDeals = ({ bestDeals }) => {
  return (
    <section className="best-deals">
      <h2>Les Meilleurs Plans du Moment !</h2>
      <div className="hotel-grid-B">
        {bestDeals.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
};

export default BestDeals;
