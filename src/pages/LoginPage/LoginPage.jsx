import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../../redux/auth/authOperations';
import s from "./LoginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    const user = { email, password };
    dispatch(login(user));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input onChange={handleChange} value={email} type="email" name="email" placeholder="Enter email" required />
        </label>

        <label>
          <span>Password</span>
          <input
            onChange={handleChange}
            value={password}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
