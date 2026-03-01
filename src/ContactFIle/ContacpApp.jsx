import React, { useReducer } from "react";
import ContactContext from "./ContactContext";
import { contactReducer } from "./ContactReducer";
import { ContactItem } from "./ContactItem";
import { ContactList } from "./ContactList";
import styles from "./contact.module.css";

const ContactApp = () => {
  const [contacts, dispatch] = useReducer(contactReducer, []);

  return (
    <ContactContext.Provider value={{ contacts, dispatch }}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact App</h2>
        <ContactItem />
        <ContactList />
      </div>
    </ContactContext.Provider>
  );
};

export default ContactApp;