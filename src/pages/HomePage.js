import React, { useState } from "react";
import HotelCard from "../components/HotelCard";
import BestDeals from "../components/BestDeals";
import Filters from "../components/Filters";
import Hero from "../components/Hero";
import FlightList from "../components/FlightList";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./HomePage.css";

const ITEMS_PER_PAGE = 3;

const hotels = [
  {
    id: 1,
    name: "Hôtel de la Plage",
    location: "Nice, France",
    price: 120,
    imageUrl: "/images/hotel-del-coronado-74079_1280.jpg",
    description:
      "Un charmant hôtel en bord de mer avec vue imprenable sur la Méditerranée.",
    latitude: 43.7102,
    longitude: 7.262,
  },
  {
    id: 2,
    name: "Mountain Resort",
    location: "Chamonix, France",
    price: 150,
    imageUrl: "/images/the-hotel-complex-2850907_1280.jpg",
    description:
      "Un complexe de montagne situé au cœur des Alpes, idéal pour les amateurs de ski.",
    latitude: 45.9237,
    longitude: 6.8694,
  },
  {
    id: 3,
    name: "Hotel du Château",
    location: "Carcassonne, France",
    price: 130,
    imageUrl: "/images/gleneagles-hotel-3434945_1280.jpg",
    description:
      "Situé à l'intérieur des remparts médiévaux, parfait pour les amateurs d'histoire.",
    latitude: 43.2128,
    longitude: 2.353,
  },
  {
    id: 4,
    name: "City Center Palace",
    location: "Paris, France",
    price: 200,
    imageUrl: "/images/bedroom-3475656_1280.jpg",
    description:
      "Luxueux hôtel dans le centre de Paris, proche de la Tour Eiffel et des Champs-Élysées.",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    id: 5,
    name: "Villa Verde",
    location: "Tuscany, Italy",
    price: 180,
    imageUrl: "/images/manor-house-2359884_1280.jpg",
    description:
      "Une escapade tranquille dans la campagne toscane, entourée de vignobles.",
    latitude: 43.7711,
    longitude: 11.2486,
  },
  {
    id: 6,
    name: "The Grand Resort",
    location: "Santorini, Greece",
    price: 250,
    imageUrl: "/images/pool-3911249_1280.jpg",
    description:
      "Un complexe de luxe avec vue sur la caldeira, offrant des couchers de soleil spectaculaires.",
    latitude: 36.3932,
    longitude: 25.4615,
  },
  {
    id: 7,
    name: "Desert Oasis",
    location: "Marrakech, Morocco",
    price: 110,
    imageUrl: "/images/riu-99533_1280.jpg",
    description:
      "Un havre de paix au milieu du désert, avec un décor traditionnel marocain.",
    latitude: 31.6295,
    longitude: -7.9811,
  },
  {
    id: 8,
    name: "Nordic Lodge",
    location: "Bergen, Norway",
    price: 140,
    imageUrl: "/images/the-lodge-4586948_1280.jpg",
    description:
      "Chalet pittoresque offrant des vues magnifiques sur les fjords norvégiens.",
    latitude: 60.3913,
    longitude: 5.3221,
  },
  {
    id: 9,
    name: "Safari Retreat",
    location: "Maasai Mara, Kenya",
    price: 220,
    imageUrl: "/images/namibia-4885588_1280.jpg",
    description:
      "Une expérience unique de safari au cœur de la savane africaine.",
    latitude: -1.4061,
    longitude: 35.081,
  },
  {
    id: 10,
    name: "Beach Paradise",
    location: "Maldives",
    price: 300,
    imageUrl: "/images/gleneagles-hotel-3434945_1280.jpg",
    description:
      "Un bungalow sur l'eau dans un cadre paradisiaque, avec accès direct au lagon.",
    latitude: 3.2028,
    longitude: 73.2207,
  },
  {
    id: 11,
    name: "Highland Escape",
    location: "Edinburgh, Scotland",
    price: 160,
    imageUrl: "/images/lounge-2930070_1280.jpg",
    description:
      "Une retraite paisible dans les Highlands écossais, parfaite pour les randonneurs.",
    latitude: 55.9533,
    longitude: -3.1883,
  },
  {
    id: 12,
    name: "Urban Chic",
    location: "Berlin, Germany",
    price: 140,
    imageUrl: "/images/hotel-6862159_1280.jpg",
    description:
      "Un hôtel branché dans le centre de Berlin, à proximité des musées et des galeries.",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    id: 13,
    name: "Lakeview Lodge",
    location: "Queenstown, New Zealand",
    price: 170,
    imageUrl: "/images/lounge-2930070_1280.jpg",
    description:
      "Un lodge au bord du lac, entouré de montagnes, idéal pour les sports nautiques et l'aventure.",
    latitude: -45.0312,
    longitude: 168.6626,
  },
  {
    id: 14,
    name: "Tropical Escape",
    location: "Phuket, Thailand",
    price: 135,
    imageUrl: "/images/bedroom-6577523_1280.jpg",
    description:
      "Un resort exotique avec plage privée, parfait pour une évasion tropicale.",
    latitude: 7.8804,
    longitude: 98.3923,
  },
  {
    id: 15,
    name: "Riverfront Haven",
    location: "Siem Reap, Cambodia",
    price: 125,
    imageUrl: "/images/mountains-1718078_1280.jpg",
    description:
      "Un hôtel au bord de la rivière, idéal pour explorer les temples d'Angkor.",
    latitude: 13.3671,
    longitude: 103.8448,
  },
];



const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Filtrer les hôtels
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

  // Pagination
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const hotelsToShow = filteredHotels.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredHotels.length / ITEMS_PER_PAGE);

  // Meilleurs plans (les hôtels les moins chers)
  const bestDeals = hotels.sort((a, b) => a.price - b.price).slice(0, 3);

  return (
    <div className="home-page">
      <Hero />

      <BestDeals bestDeals={bestDeals} />

      <section className="hotel-list">
        <h2>Hôtels Disponibles</h2>

        {/* Composant Filtres */}
        <Filters
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <div className="hotel-grid">
          {hotelsToShow.map((hotel) => (
            <div key={hotel.id}>
              <HotelCard hotel={hotel} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </button>
          <span>
            Page {currentPage} sur {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Suivant
          </button>
        </div>
      </section>

      {/* Carte interactive */}
      <section className="map-section">
        <h2>Carte des Hôtels</h2>
        <MapContainer
          className="custom-map"
          center={[46.603354, 1.888334]}
          zoom={6}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {hotels.map((hotel) => (
            <Marker key={hotel.id} position={[hotel.latitude, hotel.longitude]}>
              <Popup>{hotel.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>

      <FlightList />
    </div>
  );
};

export default HomePage;
