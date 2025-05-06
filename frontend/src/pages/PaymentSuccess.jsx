import React from 'react';

const PaymentSuccess = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
      <p className="text-lg">Your appointment is now confirmed. 🎉</p>
    </div>
  );
};

export default PaymentSuccess;
