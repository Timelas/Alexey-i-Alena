import React from "react";
import "./Header.css";
import date from "../../images/date.svg";
import forewer from "../../images/forewer.svg";
import hands from "../../images/hands.svg";

function Header() {
  return (
    <section className="header" id="home">
      <img src={hands} alt="руки" className="header__hands"></ img>
      <div className="header__desctop">
        <img src={date} alt="08.07.2023" className="header__date"></ img>
        <div className="header__welcome">
          <p className="header__text">Однажды</p>
          <img src={forewer} className="header__text-image" alt="и навсегда"></img>
        </div>
       </div>
    </section>
  );
}

export default Header;