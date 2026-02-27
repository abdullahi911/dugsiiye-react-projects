// src/ContactFIle/ContactReducer.js
export const contactReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return [...state, action.payload];

    case "DELETE_CONTACT":
      return state.filter(contact => contact.id !== action.payload);

    case "EDIT_CONTACT":
      return state.map(contact =>
        contact.id === action.payload.id
          ? { ...contact, ...action.payload.data }
          : contact
      );

    case "TOGGLE_FAVORITE":
      return state.map(contact =>
        contact.id === action.payload
          ? { ...contact, favorite: !contact.favorite }
          : contact
      );

    default:
      return state;
  }
};