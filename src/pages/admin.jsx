import { Link, json } from "react-router-dom";
import Screpka from "../components/screpka";
import Card from "../components/card";
import { useState, useEffect } from "react";
import axios from "axios";

function Admin() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/requests").then((res) => {
      const value = res.data;
      console.log(value);
      setData(value.data);
    });
  }, []);

  return (
    <div>
      <div className="admin">
        <div className="homeLink">
          <Link to="/">Home</Link>
        </div>
        <h1 className="zakazy">Заказы</h1>
      </div>
      <div className="adminPanel">
        <div>
          {data.map((el) => (
            <Card
              key={el.id}
              name={el.name}
              predmet={el.predmet}
              type={el.type}
              file={el.file}
              date={el.date}
              description={el.description}
              contact={el.contact}
              price={el.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Admin;
