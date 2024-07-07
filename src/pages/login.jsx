import React, { useState } from "react";
import { Link } from "react-router-dom";
import { result, postLogin } from "../services/requests";
import axios from "axios";
const Login = () => {
  const [data, setData] = useState("");
  function log(event) {
    let ss = "http://localhost:4000/api/v1/sign_up";
    event.preventDefault();
    const formData = new FormData(event.target);
    let LoginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(LoginData);
    console.log(postLogin(LoginData));
    // console.log(result.value);
    setData(result.value);
    console.log(data);
  }

  return (
    <div>
      <div className="homeLink">
        <Link to="/">Home</Link>
      </div>
      <div className="app">
        <form className="forma1" onSubmit={log}>
          <div>
            <h1>Регистрация</h1>
          </div>
          <div className="forma">
            <label htmlFor="">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="forma">
            <label htmlFor="">Password</label>
            <input type="text" name="password" />
          </div>
          <button type="submit" className="knopka">
            Подтвердить
          </button>
          <div>
            {data && (
              <div className="error">Ошибка, аккаунт уже зарегестрирован!</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
