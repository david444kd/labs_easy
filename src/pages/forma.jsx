import { useState } from "react";
import { getRequests, postRequest } from "../services/requests";
import { Link } from "react-router-dom";

function Zapros() {
  function click(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let ssilka = "https://pre-signed-demo-labs.s3.eu-north-1.amazonaws.com/";

    let ob = {
      name: formData.get("name"),
      email: formData.get("email"),
      predmet: formData.get("predmet"),
      type: formData.get("type"),
      file: formData.get("file"),
      date: formData.get("date"),
      description: formData.get("description"),
      contact: formData.get("contact"),
      price: formData.get("price"),
    };

    // let b = localStorage.getItem("StorageList");
    // if (b != undefined) {
    //   b = JSON.parse(b);
    //   localStorage.setItem("StorageList", JSON.stringify([...b, ob]));
    // } else {
    //   localStorage.setItem("StorageList", JSON.stringify([ob]));
    // }
    console.log(postRequest(ob));
  }

  return (
    <div className="app">
      <div className="homeLink">
        <Link to="/">Home</Link>
      </div>
      <form className="forma1" onSubmit={click}>
        <div>
          <h1>Введите данные</h1>
        </div>
        <div className="forma">
          <label htmlFor="">Имя</label>
          <input type="text" name="name" />
        </div>
        <div className="forma">
          <label htmlFor="">contact</label>
          <input type="text" name="contact" />
        </div>
        <div className="forma">
          <label htmlFor="">Предмет</label>
          <input type="text" name="predmet" />
        </div>
        <div className="forma">
          <label htmlFor="type">Тип задания:</label>
          <select name="type">
            <option value={1}>Лабораторная</option>
            <option value={2}>Диплом</option>
            <option value={3}>Доклад</option>
          </select>
        </div>
        <div className="forma">
          <label htmlFor="">Файл задания</label>
          <input className="file" type="file" accept="image/*" name="file" />
        </div>
        <div className="forma">
          <label htmlFor="">Срок выполнения работы</label>
          <input type="date" name="date" />
        </div>
        <div className="forma">
          <label htmlFor="">Описание</label>
          <input type="text" name="description" />
        </div>
        <div className="forma">
          <label htmlFor="">Цена</label>
          <input type="text" name="price" />
        </div>
        <button type="submit" className="knopka">
          Подтвердить
        </button>
      </form>
    </div>
  );
}
export default Zapros;
