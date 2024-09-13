import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state;

  // Récupérer les données de réservation depuis l'état
  const reservationDetails = location.state || {};

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const handlePayment = () => {
    setIsPaymentProcessing(true);
    setTimeout(() => {
      if (cardNumber && expiryDate && cvv && nameOnCard) {
        setIsPaymentProcessing(false);
        navigate("/payment-success");
      } else {
        setIsPaymentProcessing(false);
        setPaymentError("Veuillez entrer toutes les informations de paiement.");
      }
    }, 2000);
  };

  const { hotelName, checkIn, checkOut, guests, totalPrice } =
    reservationDetails;

  return (
    <div className="payment-page">
      <h2>Finalisez votre paiement</h2>

      {bookingDetails ? (
        <>
          <h2>pour votre séjour à {bookingDetails.hotel.name}</h2>
          <p>Arrivée : {bookingDetails.checkIn}</p>
          <p>Départ : {bookingDetails.checkOut}</p>
          <p>Nombre de personnes : {bookingDetails.guests}</p>
          <p>
            Total à payer : {bookingDetails.hotel.price * bookingDetails.guests}
            €
          </p>
        </>
      ) : (
        <p>Informations de réservation manquantes.</p>
      )}

      <div className="payment-form">
        <h3>Détails du paiement</h3>
        <div className="form-group">
          <label>Numéro de carte</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            disabled // Désactive le champ
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Date d'expiration</label>
            <input
              type="text"
              placeholder="MM/AA"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              disabled // Désactive le champ
            />
          </div>

          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              disabled // Désactive le champ
            />
          </div>
        </div>

        <div className="form-group">
          <label>Nom sur la carte</label>
          <input
            type="text"
            placeholder="Votre nom"
            value={nameOnCard}
            onChange={(e) => setNameOnCard(e.target.value)}
            disabled // Désactive le champ
          />
        </div>

        {paymentError && <p className="error-message">{paymentError}</p>}

        <button
          onClick={handlePayment}
          disabled // Désactive le bouton
          className="pay-button"
        >
          {isPaymentProcessing ? "Traitement..." : "Payer"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
