import React, { useState } from 'react';

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');

  return (
    <div>
      <h3>Card Payment</h3>
      <div>
        <label>Card Number:</label>
        <input
          type="text"
          maxLength={16}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Expiry Date (MM/YY):</label>
        <input
          type="text"
          maxLength={5}
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          placeholder="MM/YY"
          required
        />
      </div>
      <div>
        <label>CVV:</label>
        <input
          type="text"
          maxLength={3}
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cardholder Name:</label>
        <input
          type="text"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default CardPayment;
