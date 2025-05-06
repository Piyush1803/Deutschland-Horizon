import React from 'react';
import axios from 'axios';

const PaymentButton = ({ amount, onPaymentSuccess }) => {
  const handlePayment = async () => {
    try {
      const { data } = await axios.post('http://localhost:5000/api/payment/create-order', { amount });

      const options = {
        key: 'your_public_key_here', // ⚡Only public key
        amount: data.order.amount,
        currency: data.order.currency,
        name: 'Deutschland Horizon',
        description: 'Appointment Payment',
        order_id: data.order.id,
        handler: function (response) {
          console.log(response);
          onPaymentSuccess(response); // callback to parent
        },
        prefill: {
          name: 'User Name',
          email: 'user@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#0b5ed7',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert('Payment failed. Try again.');
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
    >
      Pay ₹{amount}
    </button>
  );
};

export default PaymentButton;
