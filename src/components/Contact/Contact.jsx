import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

import css from './Contact.module.css';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <div className={css.info}>
        <span className={css.name}>
          <FaUser /> {contact.name}
        </span>

        <span className={css.number}>
          <FaPhone /> {contact.number}
        </span>
      </div>

      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}
