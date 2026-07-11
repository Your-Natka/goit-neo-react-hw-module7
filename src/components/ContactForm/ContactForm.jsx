import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const name = form.elements.name.value.trim();

    const number = form.elements.number.value.trim();
    if (!name || !number) {
      return;
    }

    dispatch(
      addContact({
        name,
        number,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input name="name" required />

      <input name="number" required />

      <button type="submit">Add contact</button>
    </form>
  );
}
