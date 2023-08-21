import React from "react";
import { CartStyle } from "./CartStyle";
const data = [
  {
    btntitle: "Marketing",
    title: "SMM onlayn",
    photo: "curse.svg",
    backgroundColor: "#0EB182",
    desc: "Ijtimoiy tarmoqlar uchun chiroyli va samarali postlar tayyorlashni organing",
  },
  {
    btntitle: "Dizayn",
    title: "Social Media Design",
    backgroundColor: "#AE8D5E",
    photo: "curse.svg",
    desc: "Ijtimoiy tarmoqlar uchun chiroyli va samarali postlar tayyorlashni organing",
  },
  {
    btntitle: "Dasturlash",
    title: "Dasturlash foundation",
    photo: "curse.svg",
    backgroundColor: "#0F1826",
    desc: "Ijtimoiy tarmoqlar uchun chiroyli va samarali postlar tayyorlashni organing",
  },
  {
    btntitle: "Dizayn",
    title: "Adobe Illustrator",
    backgroundColor: "#AE8D5E",
    photo: "curse.svg",
    desc: "Ijtimoiy tarmoqlar uchun chiroyli va samarali postlar tayyorlashni organing",
  },
  {
    btntitle: "Dasturlash",
    title: ".NET mutaxassislik kursi",
    backgroundColor: "#0F1826",
    photo: "curse.svg",
    desc: "Ijtimoiy tarmoqlar uchun chiroyli va samarali postlar tayyorlashni organing",
  },
  {
    btntitle: "Dasturlash",
    title: "Node JS Telegram bot",
    photo: "curse.svg",
    backgroundColor: "#0F1826",
    desc: "Ijtimoiy tarmoqlar uchun chiroyli va samarali postlar tayyorlashni organing",
  },
  {
    btntitle: "Boshqa",
    title: "Kompyuter savodxonligi kursi",
    photo: "curse.svg",
    backgroundColor: "#0F1826",
    desc: "Ijtimoiy tarmoqlar uchun chiroyli va samarali postlar tayyorlashni organing",
  },
  {
    btntitle: "Boshqa",
    title: "HBS AKADEMIYASI",
    photo: "hbc.svg",
    backgroundColor: "#0F1826",
    desc: "Ijtimoiy tarmoqlar uchun chiroyli va samarali postlar tayyorlashni organing",
  },
];
const CartCours = () => {
  return (
    <CartStyle className="cart">
      <div className="container">
        <div className="cart__box">
          {data.map((course, index) => (
            <div key={index} className="cart__border">
              <div className="cart__padding">
                <button
                  className="cart__button"
                  style={{ backgroundColor: course.backgroundColor }}
                >
                  {course.btntitle}
                </button>
                <h1 className="cart__h1">{course.title}</h1>
                <p className="cart__p">{course.desc}</p>
              </div>
              <img
                src={`src/pages/Curse/Components/img/${course.photo}`}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </CartStyle>
  );
};

export default CartCours;
