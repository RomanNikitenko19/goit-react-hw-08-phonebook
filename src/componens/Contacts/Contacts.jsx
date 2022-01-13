import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contactsSlice";
import Title from "../Title";
import ContactsList from "../ContactsList";
import s from "./Contacts.module.css";

const Contacts = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <>
      <section className={s.Contacts}>
        <Title title={"Contacts"} />
        <label>
          Find contact by name
          <input
            onChange={event => dispatch(changeFilter(event.target.value))}
            value={filter}
            type="text"
            name="filter"
          />
        </label>
        <ContactsList />
      </section>
    </>
  );
};

export default Contacts;
