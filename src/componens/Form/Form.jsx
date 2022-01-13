import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOperations";
import { useState } from "react";
import MyButton from "../Button/MyButton";

const Form = () => {
  const token = useSelector(state => state.auth.token);
  const сontacts = useSelector((state) => state.contacts.data.items);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const addContacts = (newContact) => {
    const { name, number } = newContact;
    const isUniqueName = checkName(name);

    if (isUniqueName) {
      return alert(`${name} no alredy in contacts`);
    }
    dispatch(addContact({ newContact, token }));
  };

  const checkName = (value) => сontacts.some(({ name }) => name === value);

  const handleSubmit = (event) => {
    event.preventDefault();

    addContacts({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <MyButton type="submit">Add contact</MyButton>
      </form>
    </>
  );
};

export default Form;

