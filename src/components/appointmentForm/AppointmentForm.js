import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
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
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Title"
        onChange={({ target }) => setTitle(target.value)}
      ></input>
      <input
        type="date"
        name="date"
        value={date}
        onChange={({ target }) => setDate(target.value)}
        placeholder="date"
        min={getTodayString()}
      ></input>
      <input
        type="time"
        name="time"
        value={time}
        onChange={({ target }) => setDate(target.value)}
        placeholder="time"
      ></input>
      <ContactPicker
        contacts={contacts}
        setContact={setContact}
      ></ContactPicker>
      <input type="submit"></input>
    </form>
  );
};
