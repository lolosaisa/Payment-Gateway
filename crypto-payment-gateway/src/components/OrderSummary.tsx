import React from 'react';

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <div>
        <span>Item:</span> <span>Product Name</span>
      </div>
      <div>
        <span>Price:</span> <span>$50.00</span>
      </div>
      <div>
        <span>Tax:</span> <span>$5.00</span>
      </div>
      <div>
        <strong>Total:</strong> <strong>$55.00</strong>
      </div>
    </div>
  );
};

export default OrderSummary;
