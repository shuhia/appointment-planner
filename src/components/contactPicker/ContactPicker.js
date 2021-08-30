import React from "react";
import PropTypes from "prop-types";

export const ContactPicker = (props) => {
  const { contacts, setContact } = props;

  const options = contacts.map((contact, index) => (
    <option key={"contact:" + index} value={contact}>
      {contact.name}
    </option>
  ));

  return (
    <select list={contacts} onChange={({ target }) => setContact(target.value)}>
      <option selected>Select a contact</option>
      {options}
    </select>
  );
};

ContactPicker.propTypes = {
  contacts: PropTypes.array.isRequired,
  setContact: PropTypes.func.isRequired,
};
