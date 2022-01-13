import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOperations";
import ContactItem from "../ContactItem/ContactItem";

const ContactsList = () => {
  const token = useSelector((state) => state.auth.token);
  const сontacts = useSelector((state) => state.contacts.data.items);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filterContacts = () => {
    return сontacts.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const delContact = (id) => {
    dispatch(deleteContact({id, token}));
  };

  return (
    <>
      <ul>
        {filterContacts().map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} delContact={delContact} />;
        })}
      </ul>
    </>
  );
};

export default ContactsList;
