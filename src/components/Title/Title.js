import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <section className="title">
      <div className="title__header">
        <div className="title__trait"></div>
        <h2 className="title__title">{props.title}</h2>
      </div>
      <div className="title__figure"></div>
    </section>
  );
}

export default Title;