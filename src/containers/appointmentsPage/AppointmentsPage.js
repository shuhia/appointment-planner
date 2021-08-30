import React, { useState } from "react";
import PropTypes from "prop-types";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { nanoid } from "nanoid";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
  const [contact, setContact] = useState({});
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const { contacts, appointments, addAppointment } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add appointment on submit
    const appointment = { id: nanoid(), title, date, time, contact };
    addAppointment(appointment);
    clearForm();
  };

  const clearForm = () => {
    setContact({});
    setTitle("");
    setDate("");
    setTime("");
  };

  const formProps = {
    contacts,
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit,
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm {...formProps}></AppointmentForm>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList array={appointments}></TileList>
      </section>
    </div>
  );
};

AppointmentsPage.propTypes = {
  appointments: PropTypes.array.isRequired,
  contacts: PropTypes.array.isRequired,
  addAppointment: PropTypes.func.isRequired,
};
