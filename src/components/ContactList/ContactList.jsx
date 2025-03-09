import { useSelector, useDispatch } from "react-redux";

import { selectAllContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
