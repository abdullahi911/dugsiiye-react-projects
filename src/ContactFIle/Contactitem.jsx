// src/ContactFIle/ContactItem.jsx
import React, { useState, useContext } from "react";
import ContactContext from "./ContactContext.js";

export const ContactItem = () => {
  const { dispatch } = useContext(ContactContext);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (!form.name || !form.email || !form.phone) return;

    dispatch({
      type: "ADD_CONTACT",
      payload: { ...form, id: Date.now(), favorite: false },
    });

    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Add Contact</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};