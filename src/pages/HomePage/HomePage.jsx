import React from 'react';
import Title from '../../componens/UI/Title';
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <Title
          title="Welcome to the application for storing personal contacts"
        />
      </div>
    </section>
  );
};

export default HomePage;