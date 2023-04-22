import React from "react";
import { useMediaQuery } from 'usehooks-ts';
import "./Menu.css";

function Menu(props) {
  const {onVisibleBurger, isChangeBurger} = props;
  const resize = useMediaQuery('(min-width: 700px)');
  const [scroll, setScroll] = React.useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`menu ${scroll < 100 ? "" : "menu__background"}`}>
      {
        resize ? (
          <ul className="menu__links">
            <li className="menu__link"><a href="#home" className="menu__ancor">Главная</a></li>
            <li className="menu__link"><a href="#place" className="menu__ancor">Где</a></li>
            <li className="menu__link"><a href="#plan" className="menu__ancor">План дня</a></li>
            <li className="menu__link"><a href="#dresscode" className="menu__ancor">Дресс код</a></li>
            <li className="menu__link"><a href="#details" className="menu__ancor">Детали</a></li>
            <li className="menu__link"><a href="#rsvp" className="menu__ancor">RSVP</a></li>
            <li className="menu__link"><a href="#questions" className="menu__ancor">Опрос</a></li>
          </ul>
        ) : (
          <button className={`menu__button menu__button_${isChangeBurger && 'open'}`} onClick={onVisibleBurger}>
                <span className="menu__span"></span>
                <span className="menu__span"></span>
                <span className="menu__span"></span>
          </button>
        )
      }
    </nav>
  );
}

export default Menu;