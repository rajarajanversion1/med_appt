import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCardIC.css';
import AppointmentFormIC from '../AppointmentFormIC/AppointmentFormIC';
import { v4 as uuidv4 } from 'uuid';

const DoctorCardIC = ({
  name,
  speciality,
  experience,
  ratings
}) => {

  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    setShowModal(true);
  };

const handleCancel = (appointmentId) => {

  const updatedAppointments = appointments.filter(
    (appointment) => appointment.id !== appointmentId
  );

  setAppointments(updatedAppointments);

  // remove notification data
  localStorage.removeItem(name);
};

const handleFormSubmit = (appointmentData) => {

  const newAppointment = {
    id: uuidv4(),

    name: appointmentData.name,
    phoneNumber: appointmentData.phoneNumber,
    appointmentDate: appointmentData.appointmentDate,
    timeSlot: appointmentData.timeSlot,
    cancelled: false
  };

  setAppointments([...appointments, newAppointment]);

  // store doctor details
  localStorage.setItem(
    'doctorData',
    JSON.stringify({
      name,
      speciality,
      experience,
      ratings
    })
  );

  // store appointment details
  localStorage.setItem(
    name,
    JSON.stringify(newAppointment)
  );

  setShowModal(false);
};

  return (

    <div className="doctor-card-container">

      <div className="doctor-card-details-container">

        <div className="doctor-card-profile-image-container">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="#2563eb"
            className="doctor-svg"
            viewBox="0 0 16 16"
          >
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          </svg>

        </div>

        <div className="doctor-card-details">

          <div className="doctor-card-detail-name">
            {name}
          </div>

          <div className="doctor-card-detail-speciality">
            {speciality}
          </div>

          <div className="doctor-card-detail-experience">
            {experience} years experience
          </div>

          <div className="doctor-card-detail-consultationfees">
            Ratings: {ratings}
          </div>

        </div>

      </div>

      <div className="doctor-card-options-container">

        {appointments.length > 0 ? (

          <button
            className="book-appointment-btn cancel-appointment"
            onClick={() => handleCancel(appointments[0].id)}
          >
            Cancel Appointment
          </button>

        ) : (

          <button
            className="book-appointment-btn"
            onClick={handleBooking}
          >
            Book Appointment
          </button>

        )}

        <Popup
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
        >

          {(close) => (

            <div className="doctorbg">

              <div className="doctor-card-profile-image-container">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  fill="#2563eb"
                  className="doctor-svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>

              </div>

              <div className="doctor-card-details">

                <div className="doctor-card-detail-name">
                  {name}
                </div>

                <div className="doctor-card-detail-speciality">
                  {speciality}
                </div>

                <div className="doctor-card-detail-experience">
                  {experience} years experience
                </div>

                <div className="doctor-card-detail-consultationfees">
                  Ratings: {ratings}
                </div>

              </div>

              <AppointmentFormIC
                doctorName={name}
                doctorSpeciality={speciality}
                onSubmit={(data) => {
                  handleFormSubmit(data);
                  close();
                }}
              />

            </div>

          )}

        </Popup>

      </div>

    </div>
  );
};

export default DoctorCardIC;