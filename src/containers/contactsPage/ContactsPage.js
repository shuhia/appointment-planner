import React, { useState } from "react";
import PropTypes from "prop-types";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { nanoid } from "nanoid";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { contacts, addContact } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!checkForDuplicate()) {
      const contact = { id: nanoid(), name, phone, email };
      addContact(contact);
      clearFormData();
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  const checkForDuplicate = () => {
    if (contacts.includes((contact) => contact.name === name)) {
      return true;
    } else {
      return false;
    }
  };

  const clearFormData = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  const contactFormProps = {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit,
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm {...contactFormProps}></ContactForm>
      </section>
      <hr />
      <section class="contacts">
        <h2>Contacts</h2>
        <TileList array={contacts}></TileList>
      </section>
    </div>
  );
};

ContactsPage.propTypes = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired,
};
