import React, { useState, useContext } from "react";
import ContactContext from "./ContactContext";
import styles from "./contact.module.css";

export const ContactItem = () => {
  const { dispatch } = useContext(ContactContext);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    if (!form.name || !form.email || !form.phone) return;

    dispatch({
      type: "ADD_CONTACT",
      payload: { ...form, id: Date.now(), favorite: false },
    });

    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <div>
      <h3 className={styles.sectionTitle}>Add Contact</h3>
      <div className={styles.inputGroup}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className={styles.input}
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />
        <button
          className={`${styles.button} ${styles.addBtn}`}
          onClick={handleAdd}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};