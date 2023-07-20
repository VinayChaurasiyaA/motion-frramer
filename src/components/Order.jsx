import React from "react";

const Order = ({ pizza }) => {
  return (
    <div className="container order">
      <h2>Thank you for your order :) </h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping, i) => {
        // console.log((pizza?.toppings.length - 1 < i ) ? "," : "");
        console.log(pizza.toppings.length - 1 > i ? ',' : "");
        return <span key={topping}>
          {topping }{ pizza?.toppings.length - 1 > i ? "&" : ""}{" "}
        </span>;
      })}
    </div>
  );
};

export default Order;
