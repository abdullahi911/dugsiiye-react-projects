import React, { useReducer } from "react";
import ContactContext from "./ContactContext.js";
import { contactReducer } from "./ContactReducer.jsx"; // must exist
import { ContactItem } from "./Contactitem.js";
import { ContactList } from "./Contactlist.jsx";
 const ContactApp = () => {
  const [contacts, dispatch] = useReducer(contactReducer, []);

  return (
    <ContactContext.Provider value={{ contacts, dispatch }}>
      <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
        <h2>Contact App</h2>
        <ContactItem />
        <ContactList /> 
      </div>
    </ContactContext.Provider>
  );
};
export default ContactApp;