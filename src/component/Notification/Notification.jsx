import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  const [showNotification, setShowNotification] = useState(false);

  const handleClose = () => {
    setShowNotification(false);
  };

  useEffect(() => {

    const storedUsername = sessionStorage.getItem('email');

    const storedDoctorData = JSON.parse(
      localStorage.getItem('doctorData')
    );

    if (storedUsername) {
      setIsLoggedIn(true);
    }

    if (storedDoctorData) {

      setDoctorData(storedDoctorData);

      const storedAppointmentData = JSON.parse(
        localStorage.getItem(storedDoctorData.name)
      );

      if (storedAppointmentData && !storedAppointmentData.cancelled) {
        setAppointmentData(storedAppointmentData);
        setShowNotification(true);
      } else {
        setShowNotification(false);
      }
    }

  }, []);

  useEffect(() => {

    if (appointmentData?.cancelled) {
      setShowNotification(false);
    }

  }, [appointmentData]);

  return (
    <div>

      <Navbar />

      {children}

      {isLoggedIn && showNotification && appointmentData && (

        <div className="notification-container">

          <div className="appointment-card">

            <h3 className="appointment-card__title">
              Appointment Booked
            </h3>

            <p><strong>Patient:</strong> {appointmentData.name}</p>
            <p><strong>Doctor:</strong> {doctorData?.name}</p>
            <p><strong>Speciality:</strong> {doctorData?.speciality}</p>
            <p><strong>Date:</strong> {appointmentData?.appointmentDate}</p>
            <p><strong>Time Slot:</strong> {appointmentData?.timeSlot}</p>

            {/* CLOSE BUTTON */}
            <button className="close-btn" onClick={handleClose}>
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default Notification;