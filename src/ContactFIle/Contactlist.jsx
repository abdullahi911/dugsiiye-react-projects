import React, { useContext, useState } from "react";
import ContactContext from "./ContactContext";
import styles from "./contact.module.css";

export const ContactList = () => {
  const { contacts, dispatch } = useContext(ContactContext);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const startEdit = (contact) => {
    setEditingId(contact.id);
    setEditForm({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  };

  const saveEdit = (id) => {
    dispatch({ type: "EDIT_CONTACT", payload: { id, data: editForm } });
    setEditingId(null);
  };

  const toggleFavorite = (id) =>
    dispatch({ type: "TOGGLE_FAVORITE", payload: id });

  return (
    <div>
      <h3 className={styles.sectionTitle}>Contact List</h3>

      {contacts.map((contact) => (
        <div key={contact.id} className={styles.contactCard}>
          {editingId === contact.id ? (
            <>
              <input
                className={styles.input}
                value={editForm.name}
                onChange={(e) =>
                  setEditForm({ ...editForm, name: e.target.value })
                }
              />
              <input
                className={styles.input}
                value={editForm.email}
                onChange={(e) =>
                  setEditForm({ ...editForm, email: e.target.value })
                }
              />
              <input
                className={styles.input}
                value={editForm.phone}
                onChange={(e) =>
                  setEditForm({ ...editForm, phone: e.target.value })
                }
              />
              <br />
              <button
                className={`${styles.button} ${styles.editBtn}`}
                onClick={() => saveEdit(contact.id)}
              >
                Save
              </button>
              <button
                className={`${styles.button} ${styles.cancelBtn}`}
                onClick={() => setEditingId(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <h3>
                {contact.name}
                {contact.favorite && <span className={styles.star}> ★</span>}
              </h3>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>

              <button
                className={`${styles.button} ${styles.editBtn}`}
                onClick={() => startEdit(contact)}
              >
                Edit
              </button>

              <button
                className={`${styles.button} ${styles.deleteBtn}`}
                onClick={() =>
                  dispatch({
                    type: "DELETE_CONTACT",
                    payload: contact.id,
                  })
                }
              >
                Delete
              </button>

              <button
                className={`${styles.button} ${styles.favoriteBtn}`}
                onClick={() => toggleFavorite(contact.id)}
              >
                {contact.favorite ? "Unfavorite" : "Favorite"}
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};