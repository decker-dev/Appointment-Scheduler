import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import AppointmentsList from "./components/AppointmentsList";
function App() {
  
  let initializeAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initializeAppointments) {
    initializeAppointments = [];
  }
  const [appointments, setappointment] = useState(initializeAppointments);
  useEffect(() => {
    //effect
    if(initializeAppointments){
      localStorage.setItem('appointments',JSON.stringify(appointments))
    }else{
      localStorage.setItem('appointments',JSON.stringify([]));
    }
  }, [appointments,initializeAppointments]);

  const createAppointment = (appointment) => {
    setappointment([...appointments, appointment]);
  };
  //funtion delete appointments with id
  const deleteAppointment = (id) => {
    const newAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setappointment(newAppointments);
  };
  const title =
    appointments.length === 0 ? "no appointments" : "List appointments";
  return (
    <Fragment>
      <h1>ADMIN</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <AppointmentsList
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
