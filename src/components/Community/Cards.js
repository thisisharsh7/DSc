import React from "react";
import Card from "./Card";
let base = [19.99, 199.99];
let proffes = [24.99, 249.99];
let mast = [39.99, 399.99];
export default function Cards(props) {
  return (
    <>
      <article>
        <Card
          title="Basic"
          price={base[props.index]}
          storage={500}
          bytes="GB"
          user={2}
          send={3}
          newClass="side1"
        />
        <Card
          title="Professional"
          price={proffes[props.index]}
          storage={1}
          bytes="TB"
          user={5}
          send={10}
          newClass="middle"
        />
        <Card
          title="Master"
          price={mast[props.index]}
          storage={2}
          bytes="TB"
          user={10}
          send={20}
          newClass="side2"
        />
      </article>
    </>
  );
};