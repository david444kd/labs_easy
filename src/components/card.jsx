import React from "react";
import Screpka from "./screpka";
import { useState } from "react";

const Card = ({
  name,
  email,
  predmet,
  type,
  file,
  date,
  description,
  contact,
  price,
}) => {
  return (
    <div className="maket">
      <div className="cartochka">
        <div className="niz">
          <div>
            <p className="predmet">
              {predmet} &middot; {type}
            </p>
            <p className="description">{description}</p>
          </div>
          <div>
            <p className="price">{price}₸</p>
            {file != undefined && (
              <p className="filik">
                Скачать <Screpka />{" "}
              </p>
            )}
          </div>
        </div>
        <div className="niz">
          <div>
            <p className="name">{name}</p>
            <p className="contact">{contact}</p>
          </div>
          <p className="date">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
