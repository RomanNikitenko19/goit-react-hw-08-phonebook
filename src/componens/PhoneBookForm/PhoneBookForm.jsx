import Title from "../Title";
import Form from "../Form";
import s from './PhoneBookForm.module.css';

const PhoneBookForm = () => {
  return (
    <>
      <section className={s.PhoneBookForm}>
        <Title title={"Phonebook"} />
        <Form />
      </section>
    </>
  );
};

export default PhoneBookForm;
