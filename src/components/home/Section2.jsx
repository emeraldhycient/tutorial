import React, { useEffect } from "react";
import "./section2.css";
import img1 from "../../assets/Ellipse 1.png";
import img2 from "../../assets/Ellipse 2.png";
import img3 from "../../assets/Ellipse 3.png";
import img4 from "../../assets/Ellipse 4.png";
import img5 from "../../assets/Ellipse 5.png";
import img6 from "../../assets/Ellipse 6.png";
import img8 from "../../assets/Ellipse 8.png";
import img9 from "../../assets/Ellipse 9.png";
import guy from "../../assets/guy.png";

function Section2() {
  /*const [value, setValue] = React.useState("tosin");

  const changevalue = () => {
    setValue("charles");
  };

  React.useEffect(() => {
    setTimeout(() => {
      changevalue();
    }, 3000);
  }, []);*/

  const [Popular, setPopular] = React.useState("");

  /*React.useEffect(() => {
    setTimeout(() => {
      setPopular([
        { id: 1, name: "tomatoes", image: img1 },
        { id: 2, name: "carrot", image: img2 },
        { id: 3, name: "Cumcuber", image: img3 },
        { id: 4, name: "Yellow Pepper", image: img4 },
        { id: 5, name: "orange", image: img5 },
        { id: 6, name: "apples", image: img6 },
        { id: 7, name: "grapes", image: img8 },
        { id: 8, name: "strawberry and apples", image: img9 },
      ]);
    }, 3000);
  }, []);*/

  useEffect(function () {
    setTimeout(() => {
      setPopular([
        { id: 1, name: "tomatoes", image: img1 },
        { id: 2, name: "carrot", image: img2 },
        { id: 3, name: "Cumcuber", image: img3 },
        { id: 4, name: "Yellow Pepper", image: img4 },
        { id: 5, name: "orange", image: img5 },
        { id: 6, name: "apples", image: img6 },
        { id: 7, name: "grapes", image: img8 },
        { id: 8, name: "strawberry and apples", image: img9 },
      ]);
    }, 3000);
  }, []);

  return (
    <section className="section2">
      <section>
        <h2 id="head">Popular Items</h2>
        <div className="imageholder">
          {Popular ? (
            Popular.map(function (item, index) {
              return (
                <div className="hold" key={item.id}>
                  <img src={item.image} alt="" className="img" />
                  <h1>{item.name}</h1>
                </div>
              );
            })
          ) : (
            <div>loading...</div>
          )}
        </div>
      </section>
      <section>
        <div className="">
          <div className="bg">
            <img src={guy} alt="" />
          </div>
        </div>
        <div className=""></div>
      </section>
    </section>
  );
}

export default Section2;
