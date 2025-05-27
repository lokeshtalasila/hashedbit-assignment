import React from "react";
import "../styles/BookingConfirmation.css";

const BookingConfirmation = () => {
  const booking = JSON.parse(localStorage.getItem("booking"));

  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      <p><strong>Booking ID:</strong> {booking.bookingId}</p>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Email:</strong> {booking.email}</p>
      <p><strong>Mobile:</strong> {booking.mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
