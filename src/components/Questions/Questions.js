import React, {useState, useRef} from "react";
import question from "../../images/questions.svg";
import flower from "../../images/handsGreen.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycby_BYT6LzPV3FZHn66CPeQcYu6bE5b3ZBjuvAoU08L_RdiIzQ7viRTg5mtfej77Y_iK/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setisFormVisible] = useState(true);

  const handleSubmit = (e) =>{
      e.preventDefault();
      setLoading(true);
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'questions');

      fetch(scriptUrl, {
      method: 'POST',
      body: new FormData(formRef.current),

  }).then(res => {
          setLoading(false);
          setisFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <div className="question__bloks">
        <img src={flower} alt="руки" className="question__flower"></ img>
        { isFormVisible ?
          <div className="question__container">
            <img src={question} alt="опрос" className="question__header"></ img>
            <p className="question__text">Чтобы все прошло идеально и этот день запомнился надолго, пожалуйста, ответьте на несколько вопросов:</p>
            <form className="question__form" ref={formRef} onSubmit={handleSubmit}>
            <p className="question__string">
              <label htmlFor="who" className="question__label-input">Имя и фамилия:</label>
              <input type="text" name="Имя и Фамилия" id="who" required className="question__input" minLength={2}></input>
            </p>
            <fieldset className="question__string">Предпочтения по еде:
              <label  htmlFor="chicken" className="question__label">
                <input className="question__unvisible" type="radio" name="Еда" value="Курица" id="chicken"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Курица</span>
              </label>
              <label htmlFor="fish" className="question__label">
                <input className="question__unvisible" type="radio" name="Еда" value="Рыба" id="fish"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Рыба</span>
              </label>
              <label htmlFor="meat" className="question__label">
                <input className="question__unvisible" type="radio" name="Еда" value="Мясо" id="meat"></input>
                <span className="question__visible-radio"></span>
                <span className="question__text-span">Мясо</span>
              </label>
            </fieldset>
            <fieldset className="question__string">Понадобится ли вам трансфер:
              <label  htmlFor="strong" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Крепкий алкоголь" value="Крепкий алкоголь" id="strong"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Крепкий алкоголь</span>
              </label>
              <label  htmlFor="sparkling" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Игристое вино" value="Игристое вино" id="sparkling"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Игристое вино</span>
              </label>
              <label  htmlFor="sparkling" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Просекко" value="Просекко" id="prosecco"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Просекко</span>
              </label>
              <label htmlFor="white" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Белое вино" value="Белое вино" id="white"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Белое вино</span>
              </label>
              <label htmlFor="red" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Красное вино" value="Красное вино" id="red"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Красное вино</span>
              </label>
              <label htmlFor="noalco" className="question__label">
                <input className="question__unvisible" type="checkbox" name="Безалкогольные напитки" value="Безалкогольные напитки" id="noalco"></input>
                <span className="question__visible-checkbox"></span>
                <span className="question__text-span">Безалкогольные напитки</span>
              </label>
            </fieldset>
            <p className="question__string">
              <label htmlFor="alco" className="question__label-input">Номер машины для оформления пропуска на парковку:</label>
              <input type="text" name="Номер" id="number" required className="question__input"></input>
            </p>
            <button type="submit" className="question__button" disabled={loading ? true : false}>{loading ? "Отправка..." : "Подтвердить"}</button>
          </form> 
        </div>
        :
        <div>
          <img src={question} alt="опрос" className="question__header"></ img>
          <p className="question__text">Форма отправлена!</p>
        </div>
        }
      </div>
    </section>
  );
}

export default Questions;