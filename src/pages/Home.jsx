import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Image } from "../components";

import { Contacts } from "../data/Contacts";

import portrait from "../assets/images/portrait.png";

export const Home = () => {
  return (
    <div className="container">
      <div className="main__info">
        <div className="main__portrait">
          <Image src={portrait} alt="portrait" width="250px" height="auto" />
        </div>
        <h1 className="main__title">Ilya Bondarenko</h1>
      </div>
      <div className="line" />
      <ul className="main__items">
        {Contacts &&
          Contacts.map(({ title, href }) => (
            <li key={uuidv4()} className="main__item">
              <a
                href={href}
                className={
                  href ? "main__link" : "main__link main__link--disabled"
                }
                target="_blank"
                rel="noreferrer"
              >
                {/* <img src={icon} alt={alt} link={link} /> */}
                {title}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
