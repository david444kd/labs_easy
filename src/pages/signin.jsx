import React from "react";
import { Link } from "react-router-dom";
import { postSignIn } from "../services/requests";

const Signin = () => {
  function sign(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let SignInData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(SignInData);
    console.log(postSignIn(SignInData));
  }
  return (
    <div>
      <div className="homeLink">
        <Link to="/">Home</Link>
      </div>
      <div className="app">
        <form className="forma1" onSubmit={sign}>
          <div>
            <h1>Войти</h1>
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
        </form>
      </div>
    </div>
  );
};

export default Signin;
