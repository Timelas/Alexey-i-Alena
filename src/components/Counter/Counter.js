import React, { useState,useEffect } from "react";
import "./Counter.css";

function Counter({ date }) {
  const [finishTime] = useState(date.getTime());
  const [[diffMonths, diffDays, diffH, diffM], setDiff] = useState([0, 0, 0, 0]);
  const [tick, setTick] = useState(false);

  useEffect(()=> {
    const diff = (finishTime - new Date()) / 1000;
    if (diff < 0) return // время вышло
    setDiff([
      Math.floor(diff / 2628002,88), // месяца
      Math.floor((diff / 86400) % 30), // дни
      Math.floor((diff / 3600) % 24),
      Math.floor((diff / 60) % 60)
    ])
  }, [tick, finishTime])

  useEffect(()=>{
    const timerID = setInterval(() => setTick(!tick), 1000);
    return () => clearInterval(timerID);
  }, [tick])

  return (
    <section className="counter">
      <div className="counter__header">
        <div className="counter__trait"></div>
      </div>
      <div className="counter__figure"></div>
      <div className="counter__block">
        <p className="counter__title">До свадьбы осталось:</p>
        <div className="counter__bloks">
          <div className="dresscode__block-info">
            <p className="counter__number counter__number_var_month">{diffMonths}</p>
            <p className="counter__text">Месяца</p>
          </div>
          <div className="dresscode__block-info">
            <p className="counter__number counter__number_var_day">{diffDays}</p>
            <p className="counter__text">Дней</p>
          </div>
          <div className="dresscode__block-info">
            <p className="counter__number counter__number_var_hour">{diffH.toString().padStart(2, '0')}</p>
            <p className="counter__text">Часов</p>
          </div>
          <div className="dresscode__block-info">
            <p className="counter__number counter__number_var_min">{diffM
          .toString()
          .padStart(2, '0')}</p>
            <p className="counter__text">Минут</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;