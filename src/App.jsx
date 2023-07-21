import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Modal from "./components/Modal";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}
// to prevent the rerender by the use of "uselocation()"

function AppRoutes() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addToppings = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setShowModal(false)}>
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route
          path="/base"
          element={<Base addBase={addBase} pizza={pizza} />}
        />
        <Route
          path="/toppings"
          element={<Toppings addTopping={addToppings} pizza={pizza} />}
        />
        <Route
          path="/order"
          element={<Order pizza={pizza} setShowModal={setShowModal} />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
