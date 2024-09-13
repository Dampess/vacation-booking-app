import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./ReservationPage.css";

// Données fictives des hôtels (vous pouvez remplacer par vos données d'API)
const hotels = [
  {
    id: 1,
    name: "Hôtel de la Plage",
    location: "Nice, France",
    price: 120,
    imageUrl: "/images/hotel-del-coronado-74079_1280.jpg",
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

const ReservationPage = () => {
  const { hotelId } = useParams(); // Vérifie l'ID passé dans l'URL
  const navigate = useNavigate();
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });
  const [guests, setGuests] = useState(1);
  const [hotel, setHotel] = useState(null);
  const [calendarValue, setCalendarValue] = useState(new Date());

  // Simuler des dates indisponibles
  const unavailableDates = [
    new Date(2024, 8, 20), // 20 Septembre 2024
    new Date(2024, 8, 21), // 21 Septembre 2024
    new Date(2024, 8, 25), // 25 Septembre 2024
    new Date(2024, 9, 1), // 1 Octobre 2024
    new Date(2024, 9, 15), // 15 Octobre 2024
    new Date(2024, 10, 5), // 5 Novembre 2024
    new Date(2024, 11, 25), // 25 Décembre 2024
    new Date(2025, 0, 1), // 1 Janvier 2025
    new Date(2025, 0, 10), // 10 Janvier 2025
    new Date(2025, 1, 14), // 14 Février 2025
  ];

  const handleBooking = () => {
    const bookingDetails = {
      hotel: hotel,
      checkIn: dates.checkIn,
      checkOut: dates.checkOut,
      guests: guests,
    };

    navigate("/payment", { state: bookingDetails }); // Passer les données de réservation à la page paiement
  };

  useEffect(() => {
    const foundHotel = hotels.find((h) => h.id === parseInt(hotelId));

    if (foundHotel) {
      setHotel(foundHotel); // Trouve l'hôtel et le stocke
    } else {
      console.error("Hôtel non trouvé. Redirection en cours..."); // Aide au débogage
      navigate("/"); // Redirige vers l'accueil si l'hôtel n'est pas trouvé
    }
  }, [hotelId, navigate]);

  const isUnavailable = (date) => {
    return unavailableDates.some(
      (unavailableDate) => unavailableDate.getTime() === date.getTime()
    );
  };

  return (
    <div className="reservation-page">
      {hotel ? (
        <>
          <img src={hotel.imageUrl} alt={hotel.name} className="hotel-image" />
          <h2>Réservez votre séjour à {hotel.name}</h2>
          <p>{hotel.location}</p>
          <p>Prix par nuit : {hotel.price}€</p>

          {/* Calendrier */}
          <div>
            <h3>Disponibilités</h3>
            <Calendar
              value={calendarValue}
              onChange={setCalendarValue}
              tileDisabled={({ date, view }) =>
                view === "month" && isUnavailable(date)
              }
            />
          </div>

          {/* Sélection de dates */}
          <div className="dates-selection">
            <label>Arrivée :</label>
            <input
              type="date"
              value={dates.checkIn}
              onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
            />

            <label>Départ :</label>
            <input
              type="date"
              value={dates.checkOut}
              onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
            />
          </div>

          {/* Sélection du nombre de personnes */}
          <div className="guests-selection">
            <label>Nombre de personnes :</label>
            <input
              type="number"
              value={guests}
              min="1"
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          <button onClick={handleBooking} className="book-now-button">
            Confirmer la réservation
          </button>
        </>
      ) : (
        <p>Chargement des informations de l'hôtel...</p>
      )}
    </div>
  );
};

export default ReservationPage;
