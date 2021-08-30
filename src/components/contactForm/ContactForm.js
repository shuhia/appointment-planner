import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form class="contacts-form" onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        name="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
        placeholder="name"
        required
      ></input>
      <input
        id="phone"
        type="tel"
        name="phone"
        value={phone}
        onChange={({ target }) => setPhone(target.value)}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        placeholder="phone number"
        required
      ></input>
      <input
        id="email"
        type="email"
        name="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        placeholder="email"
        required
      ></input>
      <input type="submit"></input>
    </form>
  );
};
