import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import PropTypes from "prop-types";
import css from "./Contact.module.css";

export const Contact = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{text}</p>
      <button type="button" className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Contact;
