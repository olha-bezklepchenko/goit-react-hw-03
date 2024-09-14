import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <p className={css.info}>
          <FaUser className={css.contactIcon} />
          {name}
        </p>
        <p className={css.info}>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button
        className={css.deleteBtn}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
