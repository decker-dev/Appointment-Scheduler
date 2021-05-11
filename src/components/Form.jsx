import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const Form = () => {
  const [appointment, updateAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptoms: "",
  });
  const [error, seterror] = useState(false);

  const handleChange = (e) => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };
  const { pet, owner, date, time, symptoms } = appointment;
  const submitAppointment = (e) => {
    e.preventDefault();
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      symptoms.trim() === ""
    ) {
      seterror(true);
      return;
    }
    seterror(false);
    appointment.id=uuidv4()
    console.log(appointment)
  };
  return (
    <Fragment>
      <h1>Create Appointment</h1>
      {error ? <p className="alerta-error">All fields are required</p> : null}
      <form onSubmit={submitAppointment}>
        <label>Name Pet</label>
        <input
          type="text"
          name="pet"
          className="u-fill-width"
          placeholder="Name Pet"
          onChange={handleChange}
          value={pet}
        />
        <label>Name Owner</label>
        <input
          type="text"
          name="owner"
          className="u-fill-width"
          placeholder="Name Owner"
          onChange={handleChange}
          value={owner}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-fill-width"
          onChange={handleChange}
          value={date}
        />
        <label>time</label>
        <input
          type="time"
          name="time"
          className="u-fill-width"
          onChange={handleChange}
          value={time}
        />
        <label>Symptoms</label>
        <textarea
          className="u-fill-width"
          name="symptoms"
          onChange={handleChange}
          value={symptoms}
        ></textarea>
        <br />
        <button type="submit" className="u-fill-width button-primary">
          Create
        </button>
      </form>
    </Fragment>
  );
};
export default Form;
