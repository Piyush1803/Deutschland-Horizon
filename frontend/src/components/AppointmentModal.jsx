import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentModal = ({ closeModal }) => {
  const [availableDates, setAvailableDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    // Fetch available dates from backend on load
    axios.get("http://localhost:8080/api/appointments/available-dates")
      .then(res => {
        setAvailableDates(res.data.map(dateStr => new Date(dateStr)));
      })
      .catch(err => console.error("Error fetching dates", err));
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedDateTime(null); // reset selected time when date changes
    const selectedDateStr = date.toLocaleDateString("en-CA"); // e.g., "2025-05-25"
    axios.get(`http://localhost:8080/api/appointments/available?date=${selectedDateStr}`)
      .then(res => {
        const slotTimes = res.data.map(slot => {
          const [hour, minute, second] = slot.startTime.split(":");
          const newDate = new Date(date);
          newDate.setHours(hour, minute, second, 0);
          return {
            id: slot.id,
            time: newDate,
            isBooked: slot.is_booked
          };
        });
        setAvailableSlots(slotTimes);
      })
      .catch(err => console.error("Error fetching slots", err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSlotSelect = (slot) => {
    setSelectedDateTime(slot.time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedDateTime) {
      alert("Please select a valid date and time.");
      return;
    }

    const selectedSlot = availableSlots.find(
      (slot) => slot.time.getTime() === selectedDateTime.getTime() && !slot.isBooked
    );

    if (!selectedSlot) {
      alert("Selected time is not available. Please choose another time.");
      return;
    }

    try {
      const payload = {
        slotId: selectedSlot.id,
        name: formData.name,
        email: formData.email
      };
     const res = await axios.post("http://localhost:8080/api/payments/create-checkout-session", payload);

    if(res.data && res.data.url){
      window.location.href = res.data.url;
    }else {
      throw new Error("Stripe session URL not received.");
    }

      // alert("Appointment booked successfully!");
      // closeModal();

    } catch (error) {
      console.error("Error redirecting to payment:", error);
      alert("Failed to initiate. Please try again.");
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

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              includeDates={availableDates}
              dateFormat="yyyy-MM-dd"
              placeholderText="Pick a date"
              className="border border-gray-300 p-3 rounded-lg w-full"
              required
            />
          </div>

          {/* Available Slots List */}
          {selectedDate && (
            availableSlots.length > 0 ? (
              <div className="mt-2 text-sm text-gray-600">
                <p className="font-medium mb-1">Available slots:</p>
                <ul className="list-disc pl-5">
                  {availableSlots.map((slot) => (
                    <li
                      key={slot.id}
                      className={`cursor-pointer ${slot.isBooked ? "text-gray-400" : (selectedDateTime?.getTime() === slot.time.getTime() ? "text-purple-600 font-bold" : "text-blue-600")}`}
                      onClick={() => !slot.isBooked && handleSlotSelect(slot)}
                    >
                      {slot.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      {slot.isBooked && " (Booked)"}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="mt-2 text-sm text-red-600">
                <p>No available slots on this date.</p>
              </div>
            )
          )}

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