import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/BookingForm.css";

const BookingForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = "BK" + Math.floor(Math.random() * 100000);
    const booking = { ...formData, movie: state.Title, bookingId };

    localStorage.setItem("booking", JSON.stringify(booking));
    navigate("/confirmation");
  };

  return (
    <div className="form-container">
      <h2>Book Tickets for {state.Title}</h2>
      <form onSubmit={handleSubmit}>
        <input required placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input required type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input required type="tel" placeholder="Mobile" onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
