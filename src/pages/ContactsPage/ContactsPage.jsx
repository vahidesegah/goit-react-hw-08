import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { addContact } from "../../redux/contacts/operations";
import { deleteContact } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import Contact from "../../components/Contact/Contact";
import Filter from "../../redux/filters/slice.js";
import styles from "./ContactsPage.module.css";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = () => {
    dispatch(addContact({ name: "New Contact", number: "123-456-7890" }));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  return (
    <div className={styles.container}>
      <h2>Your Contacts</h2>

      <Contact />
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <p>No contacts found.</p>}
      <button onClick={handleAddContact}>Add Contact</button>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
