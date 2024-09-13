import React, { useState } from "react";
import HotelCard from "../components/HotelCard";
import BestDeals from "../components/BestDeals";
import Filters from "../components/Filters";
import Hero from "../components/Hero"
import FlightList from "../components/FlightList";
import "./HomePage.css";

const hotels = [
  {
    id: 1,
    name: "Hôtel de la Plage",
    location: "Nice, France",
    price: 120,
    imageUrl: "/images/hotel-del-coronado-74079_1280.jpg" ,
    description:
      "Un charmant hôtel en bord de mer avec vue imprenable sur la Méditerranée.",
  },
  {
    id: 2,
    name: "Mountain Resort",
    location: "Chamonix, France",
    price: 150,
    imageUrl: "/images/the-hotel-complex-2850907_1280.jpg",
    description:
      "Un complexe de montagne situé au cœur des Alpes, idéal pour les amateurs de ski.",
  },
  {
    id: 3,
    name: "Hotel du Château",
    location: "Carcassonne, France",
    price: 130,
    imageUrl: "/images/gleneagles-hotel-3434945_1280.jpg",
    description:
      "Situé à l'intérieur des remparts médiévaux, parfait pour les amateurs d'histoire.",
  },
  {
    id: 4,
    name: "City Center Palace",
    location: "Paris, France",
    price: 200,
    imageUrl: "/images/bedroom-3475656_1280.jpg",
    description:
      "Luxueux hôtel dans le centre de Paris, proche de la Tour Eiffel et des Champs-Élysées.",
  },
  {
    id: 5,
    name: "Villa Verde",
    location: "Tuscany, Italy",
    price: 180,
    imageUrl: "/images/manor-house-2359884_1280.jpg",
    description:
      "Une escapade tranquille dans la campagne toscane, entourée de vignobles.",
  },
  {
    id: 6,
    name: "The Grand Resort",
    location: "Santorini, Greece",
    price: 250,
    imageUrl: "/images/pool-3911249_1280.jpg",
    description:
      "Un complexe de luxe avec vue sur la caldeira, offrant des couchers de soleil spectaculaires.",
  },
  {
    id: 7,
    name: "Desert Oasis",
    location: "Marrakech, Morocco",
    price: 110,
    imageUrl: "/images/riu-99533_1280.jpg",
    description:
      "Un havre de paix au milieu du désert, avec un décor traditionnel marocain.",
  },
  {
    id: 8,
    name: "Nordic Lodge",
    location: "Bergen, Norway",
    price: 140,
    imageUrl: "/images/the-lodge-4586948_1280.jpg",
    description:
      "Chalet pittoresque offrant des vues magnifiques sur les fjords norvégiens.",
  },
  {
    id: 9,
    name: "Safari Retreat",
    location: "Maasai Mara, Kenya",
    price: 220,
    imageUrl: "/images/namibia-4885588_1280.jpg",
    description:
      "Une expérience unique de safari au cœur de la savane africaine.",
  },
  {
    id: 10,
    name: "Beach Paradise",
    location: "Maldives",
    price: 300,
    imageUrl: "/images/gleneagles-hotel-3434945_1280.jpg",
    description:
      "Un bungalow sur l'eau dans un cadre paradisiaque, avec accès direct au lagon.",
  },
  {
    id: 11,
    name: "Highland Escape",
    location: "Edinburgh, Scotland",
    price: 160,
    imageUrl: "/images/lounge-2930070_1280.jpg",
    description:
      "Une retraite paisible dans les Highlands écossais, parfaite pour les randonneurs.",
  },
  {
    id: 12,
    name: "Urban Chic",
    location: "Berlin, Germany",
    price: 140,
    imageUrl: "/images/hotel-6862159_1280.jpg",
    description:
      "Un hôtel branché dans le centre de Berlin, à proximité des musées et des galeries.",
  },
  {
    id: 13,
    name: "Lakeview Lodge",
    location: "Queenstown, New Zealand",
    price: 170,
    imageUrl: "/images/lounge-2930070_1280.jpg",
    description:
      "Un lodge au bord du lac, entouré de montagnes, idéal pour les sports nautiques et l'aventure.",
  },
  {
    id: 14,
    name: "Tropical Escape",
    location: "Phuket, Thailand",
    price: 135,
    imageUrl: "/images/bedroom-6577523_1280.jpg",
    description:
      "Un resort exotique avec plage privée, parfait pour une évasion tropicale.",
  },
  {
    id: 15,
    name: "Riverfront Haven",
    location: "Siem Reap, Cambodia",
    price: 125,
    imageUrl: "/images/mountains-1718078_1280.jpg",
    description:
      "Un hôtel au bord de la rivière, idéal pour explorer les temples d'Angkor.",
  },
];

const HomePage = () => {
  // États pour la recherche et les filtres
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Filtrer les hôtels selon la recherche et les filtres
  const filteredHotels = hotels
    .filter((hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((hotel) =>
      locationFilter
        ? hotel.location.toLowerCase().includes(locationFilter.toLowerCase())
        : true
    )
    .filter((hotel) => (maxPrice ? hotel.price <= maxPrice : true));

  // Sélectionner les trois hôtels les moins chers pour les meilleurs plans
  const bestDeals = hotels.sort((a, b) => a.price - b.price).slice(0, 3);

  return (
    <div className="home-page">
      <Hero />

      {/* Composant Meilleurs Plans */}
      <BestDeals bestDeals={bestDeals} />

      {/* Liste des hôtels filtrés */}
      <section className="hotel-list">
        <h2>Hôtels Disponibles</h2>
        {/* Composant de filtrage */}
        <Filters
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <div className="hotel-grid">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </section>
      {/* Composant Vols */}
      <FlightList />
    </div>
  );
};

export default HomePage;
