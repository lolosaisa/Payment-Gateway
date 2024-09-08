import React from 'react';

interface PaymentConfirmationProps {
  transactionId: string;
  amount: number;
}

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({ transactionId, amount }) => {
  return (
    <div className="payment-confirmation">
      <h3>Payment Successful</h3>
      <p>Transaction ID: {transactionId}</p>
      <p>Amount Paid: ${amount}</p>
      <p>Thank you for your payment!</p>
    </div>
  );
};

export default PaymentConfirmation;
