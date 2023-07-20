import { useState } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';


function App() {
  const [pizza, setPizza] = useState({base:"" , toppings:[]})
  const addBase = (base) => {
    setPizza({...pizza , base});
  }

  const addToppings = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings , topping];
    }
    else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({...pizza , toppings:newToppings})
  }
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/base' element={<Base addBase={addBase} pizza={pizza}/>}/>
        <Route path='/toppings' element={<Toppings addTopping={addToppings} pizza={pizza}/>}/>
        <Route path='/order' element={<Order pizza={pizza}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
