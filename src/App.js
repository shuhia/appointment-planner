import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import faker from "faker";
import { nanoid, random } from "nanoid";

function createFakeContact(amount = 1) {
  return [...Array(amount)].map(() => {
    return {
      id: nanoid(),
      name: faker.name.firstName(),
      phone: faker.phone.phoneNumber(),
      email: faker.internet.email(),
    };
  });
}

function getRandomElementFromArray(array) {
  if (array) {
    const length = array.length;
    const randomIndex = Math.floor(Math.random * length);
    return array[randomIndex];
  }
}

function createFakeAppointment(amount = 1, contact) {
  return [...Array(amount)].map(() => {
    return {
      id: nanoid(),
      contact,
      time: faker.time.recent(),
    };
  });
}

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState(createFakeContact(5));
  const [appointments, setAppointments] = useState(
    createFakeAppointment(3, getRandomElementFromArray(contacts))
  );

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  // Add a new contact
  const addContact = (contact) => {
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  // Add a new appointment object
  const addAppointment = (appointment) => {
    setAppointments((prevAppointments) => [appointment, ...prevAppointments]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
