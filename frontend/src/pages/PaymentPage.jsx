import React from 'react';
import PaymentButton from '../components/PaymentButton';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();

  const handlePaymentSuccess = (paymentData) => {
    console.log('Payment successful:', paymentData);

    // You can call backend here to confirm appointment
    // await axios.post('/api/appointment/confirm', { appointmentDetails });

    navigate('/payment-success');
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Complete Your Payment</h1>
      <PaymentButton amount={500} onPaymentSuccess={handlePaymentSuccess} />
    </div>
  );
};

export default PaymentPage;
