// src/App.js
import React from 'react';
//import Credentials from './components/Credentials/Credentials';
import PaymentConfirmation from './components/PaymentConfirmation.tsx';
import OrderSummary from './components/OrderSummary.tsx';
import CardPayment from './components/CardPayment.tsx';
import PaymentForm from './components/PaymentGateway.tsx';

function App() {
  return (
    <div className="App">
    
      <PaymentForm/>
      <PaymentConfirmation />

      <OrderSummary />
      <CardPayment />
    </div>
  );
}

export default App;


