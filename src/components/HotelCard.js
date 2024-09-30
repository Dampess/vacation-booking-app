import React from "react";
import { Link } from "react-router-dom";
import "./HotelCard.css";
import Review from "../components/Review";

const reviews = [
  // Avis pour Hôtel de la Plage
  {
    id: 1,
    hotelId: 1,
    userName: "Jean Dupont",
    rating: 4.5,
    comment:
      "Superbe vue, personnel très accueillant. Parfait pour des vacances en famille !",
  },
  {
    id: 2,
    hotelId: 1,
    userName: "Marie Lafont",
    rating: 4.0,
    comment:
      "Bel hôtel mais un peu cher. Les chambres sont propres et spacieuses.",
  },
  {
    id: 3,
    hotelId: 1,
    userName: "Lucas Marchand",
    rating: 3.5,
    comment: "La nourriture était correcte, mais l'emplacement est incroyable.",
  },
  {
    id: 4,
    hotelId: 1,
    userName: "Sophie Martin",
    rating: 5.0,
    comment:
      "Le meilleur séjour que j'ai eu depuis des années. Vraiment recommandé !",
  },
  {
    id: 5,
    hotelId: 1,
    userName: "Nicolas Roux",
    rating: 3.8,
    comment:
      "Hôtel charmant, mais certaines parties auraient besoin d'une rénovation.",
  },

  // Avis pour Mountain Resort
  {
    id: 6,
    hotelId: 2,
    userName: "Alain Rousseau",
    rating: 5.0,
    comment: "Le séjour parfait dans les Alpes ! Les pistes sont tout près.",
  },
  {
    id: 7,
    hotelId: 2,
    userName: "Émilie Bernard",
    rating: 4.2,
    comment: "Très beau chalet et personnel amical. Le ski était fantastique.",
  },
  {
    id: 8,
    hotelId: 2,
    userName: "Catherine Meunier",
    rating: 4.8,
    comment: "Excellent service et emplacement. J'y retournerais sans hésiter.",
  },
  {
    id: 9,
    hotelId: 2,
    userName: "Julien Dubois",
    rating: 4.0,
    comment:
      "L'hôtel est bien situé, mais un peu isolé. Superbe vue des montagnes.",
  },
  {
    id: 10,
    hotelId: 2,
    userName: "Isabelle Leclerc",
    rating: 3.9,
    comment:
      "Belle expérience dans l'ensemble, même si le prix est un peu élevé.",
  },

  // Avis pour Hotel du Château
  {
    id: 11,
    hotelId: 3,
    userName: "Michel Dufresne",
    rating: 4.6,
    comment:
      "Très bien situé pour découvrir Carcassonne. L'hôtel est magnifique.",
  },
  {
    id: 12,
    hotelId: 3,
    userName: "Julie Perrot",
    rating: 4.1,
    comment:
      "Parfait pour un court séjour, proche des attractions historiques.",
  },
  {
    id: 13,
    hotelId: 3,
    userName: "François Legendre",
    rating: 3.7,
    comment:
      "La chambre était un peu petite mais l'emplacement compense largement.",
  },
  {
    id: 14,
    hotelId: 3,
    userName: "Amélie Laurent",
    rating: 4.9,
    comment: "Un vrai château dans un cadre médiéval. Atmosphère incroyable.",
  },

  // Avis pour City Center Palace
  {
    id: 15,
    hotelId: 4,
    userName: "Pauline Garnier",
    rating: 5.0,
    comment:
      "Luxueux et bien situé. Tout près des principaux sites touristiques.",
  },
  {
    id: 16,
    hotelId: 4,
    userName: "Vincent Delacroix",
    rating: 4.5,
    comment:
      "Les chambres sont magnifiques, mais le service était un peu lent.",
  },
  {
    id: 17,
    hotelId: 4,
    userName: "Lucie Petit",
    rating: 4.0,
    comment: "Parfait pour découvrir Paris. Proche de tout, très pratique.",
  },
  {
    id: 18,
    hotelId: 4,
    userName: "Antoine Lefebvre",
    rating: 3.9,
    comment: "Le prix est élevé mais la qualité des services est excellente.",
  },

  // Avis pour Villa Verde
  {
    id: 19,
    hotelId: 5,
    userName: "Sarah Muller",
    rating: 4.8,
    comment: "Un coin de paradis. Très calme, parfait pour se ressourcer.",
  },
  {
    id: 20,
    hotelId: 5,
    userName: "Hugo Renaud",
    rating: 4.2,
    comment: "Belle villa entourée de vignobles, une expérience inoubliable.",
  },
  {
    id: 21,
    hotelId: 5,
    userName: "Clara Girard",
    rating: 3.6,
    comment: "Endroit charmant mais le transport vers la ville est difficile.",
  },

  // Avis pour The Grand Resort
  {
    id: 22,
    hotelId: 6,
    userName: "Emma Dupuis",
    rating: 5.0,
    comment: "Une vue magnifique sur la caldeira, un séjour de rêve.",
  },
  {
    id: 23,
    hotelId: 6,
    userName: "Thomas Dubois",
    rating: 4.7,
    comment: "Les couchers de soleil sont spectaculaires. Super séjour.",
  },
  {
    id: 24,
    hotelId: 6,
    userName: "Elodie Lemoine",
    rating: 4.3,
    comment: "Le luxe à son paroxysme, mais un peu cher pour ce qu'on reçoit.",
  },

  // Avis pour Desert Oasis
  {
    id: 25,
    hotelId: 7,
    userName: "Leila Benali",
    rating: 4.9,
    comment: "Un véritable havre de paix dans le désert. Expérience magique.",
  },
  {
    id: 26,
    hotelId: 7,
    userName: "Karim El Haouzi",
    rating: 4.4,
    comment: "Décor authentique et tranquillité assurée, séjour exceptionnel.",
  },

  // Avis pour Nordic Lodge
  {
    id: 27,
    hotelId: 8,
    userName: "Bjorn Eriksen",
    rating: 5.0,
    comment:
      "Les fjords sont à couper le souffle. Le chalet est très confortable.",
  },
  {
    id: 28,
    hotelId: 8,
    userName: "Ingrid Sorensen",
    rating: 4.5,
    comment:
      "Très pittoresque, excellent service. Les paysages sont magnifiques.",
  },

  // Avis pour Safari Retreat
  {
    id: 29,
    hotelId: 9,
    userName: "John Mwangi",
    rating: 4.9,
    comment:
      "Une aventure extraordinaire dans la savane. Je recommande vivement.",
  },
  {
    id: 30,
    hotelId: 9,
    userName: "Grace Wanjiru",
    rating: 4.8,
    comment: "L'hébergement est luxueux, et le safari était incroyable.",
  },
];

// Section Avis Utilisateurs
const getReviewsForHotel = (hotelId) =>
  reviews.filter((review) => review.hotelId === hotelId);

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img
        src={`${process.env.PUBLIC_URL}${hotel.imageUrl}`}
        alt={hotel.name}
        className="hotel-image"
      />
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
        {/* Section pour afficher les avis de l'hôtel */}
        <section className="review-section">
          <h3>Commentaires</h3>
          {getReviewsForHotel(hotel.id).map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default HotelCard;
