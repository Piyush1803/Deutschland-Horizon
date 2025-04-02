import React, { useState } from "react";
import axios from "axios";

const AppointmentModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/appointments", formData);
      alert("Appointment booked successfully!");
      closeModal(); // Close modal after successful booking
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("Failed to book appointment. Try again!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/5 backdrop-blur-md z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[500px] max-w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">
          Book an Appointment
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-400 outline-none"
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-purple-400 outline-none"
            onChange={handleChange} 
            required 
          />
          <div className="flex space-x-4">
            <input 
              type="date" 
              name="date" 
              className="border border-gray-300 p-3 rounded-lg w-1/2 focus:ring-2 focus:ring-purple-400 outline-none"
              onChange={handleChange} 
              required 
            />
            <input 
              type="time" 
              name="time" 
              className="border border-gray-300 p-3 rounded-lg w-1/2 focus:ring-2 focus:ring-purple-400 outline-none"
              onChange={handleChange} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition text-lg font-medium"
          >
            Confirm Booking
          </button>
          <button 
            type="button" 
            onClick={closeModal} 
            className="bg-gray-400 text-white py-3 rounded-lg hover:bg-gray-500 transition text-lg font-medium"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentModal;
