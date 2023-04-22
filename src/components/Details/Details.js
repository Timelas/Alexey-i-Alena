import React from "react";
import details from "../../images/Details.svg";
import hand from "../../images/hand10.svg";
import "./Details.css";

function Details() {
  return (
    <section className="details" id="details">
      <img src={details} alt="детали" className="details__header"></ img>
      <img src={hand} alt="рука" className="details__hand"></ img>
      <p className="details__text">Обратите внимание, что формат мероприятия не предполагает детской площадки и аниматоров. Пожалуйста, позаботьтесь о том, чтобы провести этот вечер без детей.</p>
      <p className="details__text">Мы будем рады, если вместо цветов вы подарите нам вашу любимую книгу для нашей семейной библиотеки или виниловую пластинку для домашней коллекции.</p>
      <p className="details__text">От всего сердца просим вас воздержаться от криков "Горько!" и сохранить атмосферу уютного семейного праздника.</p>
      <p className="details__text">Вечером, возможно, будет прохладно, пожалуйста, возьмите с собой теплые вещи.</p>
      <p className="details__text">Мы будем рады любому подарку, но если не будет идей - можете воспользоваться <a href="https://followish.io/mywishlist/iagdzylvjuom5b" className="details__ancor" target="blank">вишлистом</a>. Не забудьте забронировать подарок!</p>
    </section>
  );
}

export default Details;