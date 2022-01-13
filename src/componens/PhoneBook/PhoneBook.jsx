import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getContacts } from "../../redux/contacts/contactsOperations";
import PhoneBookForm from "../../componens/PhoneBookForm";
import Contacts from "../Contacts";
import MyLoader from '../../componens/UI/Loader/MyLoader';

const PhoneBook = () => {
  const сontacts = useSelector(state => state.contacts.data.items);
  const loading = useSelector(state => state.contacts.data.loading);
  const error = useSelector(state => state.contacts.data.error);
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (!token) return;

    dispatch(getContacts(token));
  }, [dispatch, token]);

  return (
    <>
      <PhoneBookForm />
      {Boolean(сontacts.length) && <Contacts />}
      {loading && <MyLoader />}
      {error && <h2 style={{ textAlign: "center" }}>{error.message}</h2>}
    </>
  );
};

export default PhoneBook;
