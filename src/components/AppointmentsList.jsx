import React from "react";
const appointmentsList = ({ appointment, deleteAppointment }) => {
  return (
    <div className="cita">
      <p>
        Pet:
        <span>{appointment.pet}</span>
      </p>
      <p>
        owner:
        <span>{appointment.owner}</span>
      </p>
      <p>
        date:
        <span>{appointment.date}</span>
      </p>
      <p>
        time:
        <span>{appointment.time}</span>
      </p>
      <p>
        symptoms:
        <span>{appointment.symptoms}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => deleteAppointment(appointment.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};
export default appointmentsList;
