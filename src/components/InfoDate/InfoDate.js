import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import names from "../../images/names.svg";
import hands from "../../images/handsLove.svg";
import ballmap from "../../images/ballleft.svg";
import "./InfoDate.css";

function InfoDate() {
  const resizeM = useMediaQuery('(min-width: 1300px)');
  const resizeS = useMediaQuery('(min-width: 900px)');
  const resizeL = useMediaQuery('(min-width: 1700px)');
  const DBmapL = "https://yandex.ru/map-widget/v1/?um=constructor%3A005fd4cb792fe60ff225b80a8d95e565f73bdb3b94ef3deb5cb5f8bc3902bbe7&amp;source=constructor";
  const DBmapM = "https://yandex.ru/map-widget/v1/?um=constructor%3A151bd916dea685db562f4d80f07e5a7af687f0e8c01efa6231feb95026c681fb&amp;source=constructor";
  const DBmapS = "https://yandex.ru/map-widget/v1/?um=constructor%3Aca6314231129cf400b05ccb46d7df5cd7a9e2ae13dc1a706371f9a043256f0a4&amp;source=constructor";
  const DBmapXS = "https://yandex.ru/map-widget/v1/?um=constructor%3Aca6314231129cf400b05ccb46d7df5cd7a9e2ae13dc1a706371f9a043256f0a4&amp;source=constructor";

  function resize () {
    if (resizeL) {
      return DBmapL;
    } if (resizeM) {
      return DBmapM; 
    } if (resizeS) {
      return DBmapS; 
    } else {
      return DBmapXS;
    }
  };

  function width() {
    if (resizeL) {
      return "600px";
    } if (resizeM) {
      return "350px"; 
    } if (resizeS) {
      return "300px"; 
    } else {
      return "240px";
    }
  };

  function height() {
    if (resizeL) {
      return "600px";
    } if (resizeM) {
      return "350px"; 
    } if (resizeS) {
      return "300px"; 
    } else {
      return "240px";
    }
  };

  return (
    <section className="info-date">
      <div className="info-date__invitation">
        <img className="info-date__who" alt="Александра и Кирилл" src={names}></img>
        <p className="info-date__text">Приглашают вас на свадьбу!</p>
        <div className="info-date__info">
          <p className="info-date__text">23 ИЮЛЯ 2023 ГОДА</p>
          <img className="info-date__hands" alt="цветок" src={hands}></img>
          <p className="info-date__text info-date__text_position_left">ВОСКРЕСЕНЬЕ, 14:30</p>
        </div>
      </div>
      <div className="info-date__place" id="place">
        <div className="info-date__check-in info-date__check-in_color_white">
          <div className="info-date__block-text">
            <p className="info-date__text info-date__text_position_right">​Парк-отель "Даниловский" <br /> ​город Москва, <br />Большой Староданиловский переулок, 5</p>
            <p className="info-date__text info-date__text_position_right">Сбор гостей в 14:30</p>
          </div>
          <div className="info-date__with-map">
            <iframe src={resize()} frameBorder="0" title="ЗАГС" className="info-date__map" width={width()} height={height()}></iframe>
            <img className="info-date__ball-map" alt="цветок" src={ballmap}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoDate;