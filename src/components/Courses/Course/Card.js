import React from "react";

const Card = (props) => {
  return (
    <>
      <section className={`card-body ${props.newClass}`}>
        <div className="card-skeleton">
          <div>
            <img src="/images/clip.png" alt="" />
          </div>
          <button className="bg-yellow-400">Start learning</button>
          <ul>
            <li>
            <span className="dollar">&#36;</span>
              <span>{props.price}</span>
            </li>
            <li>
              📽️ {props.dur} hours of video
            </li>
            <li>
             📃 {props.anum} articles
            </li>
            <li>
            📝 English/Hindi
            </li>
            <li>
              📱 Access on mobile
            </li>
          </ul>

        </div>
      </section>
    </>
  );
};

export default Card;