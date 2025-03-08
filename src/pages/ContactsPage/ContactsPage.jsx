import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactList from "../../components/ContactList/ContactList";
import Contact from "../../components/Contact/Contact";
import Filter from "../../redux/filters/slice.js";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2>Your Contacts</h2>
      <Contact />
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <p>No contacts found.</p>}
    </div>
  );
};

export default ContactsPage;
