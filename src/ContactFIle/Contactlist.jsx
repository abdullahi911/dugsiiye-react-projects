// src/ContactFIle/ContactList.jsx
import React, { useContext, useState } from "react";
import ContactContext from "./ContactContext.js";

export const ContactList = () => {
  const { contacts, dispatch } = useContext(ContactContext);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", phone: "" });

  const startEdit = contact => {
    setEditingId(contact.id);
    setEditForm({ name: contact.name, email: contact.email, phone: contact.phone });
  };

  const saveEdit = id => {
    dispatch({ type: "EDIT_CONTACT", payload: { id, data: editForm } });
    setEditingId(null);
  };

  const cancelEdit = () => setEditingId(null);

  const toggleFavorite = id => dispatch({ type: "TOGGLE_FAVORITE", payload: id });

  return (
    <div>
      <h3>Contact List</h3>
      {contacts.map(contact => (
        <div
          key={contact.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          {editingId === contact.id ? (
            <>
              <input
                type="text"
                value={editForm.name}
                onChange={e => setEditForm({ ...editForm, name: e.target.value })}
              />
              <input
                type="email"
                value={editForm.email}
                onChange={e => setEditForm({ ...editForm, email: e.target.value })}
              />
              <input
                type="text"
                value={editForm.phone}
                onChange={e => setEditForm({ ...editForm, phone: e.target.value })}
              />
              <button onClick={() => saveEdit(contact.id)}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <h3>
                {contact.name} {contact.favorite && <span style={{ color: "gold" }}>★</span>}
              </h3>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
              <button onClick={() => startEdit(contact)}>Edit</button>
              <button onClick={() => dispatch({ type: "DELETE_CONTACT", payload: contact.id })}>
                Delete
              </button>
              <button onClick={() => toggleFavorite(contact.id)}>
                {contact.favorite ? "Unfavorite" : "Favorite"}
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};