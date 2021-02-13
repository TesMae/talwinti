import React from "react"
import {Provider} from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import {createStore} from "redux"
import reducer from "./reducer"

import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import ColoringPapersCatalogue from "./components/ColoringPapers/ColoringPapersCatalogue"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"
import Navbar from "./components/Navbar/Navbar"
import ShoppingCartCommandForm from "./components/ShoppingCart/ShoppingCartCommandForm"

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/shop" component={ColoringPapersCatalogue}/>
            <Route path ="/contact" component={Contact}/>
            <Route path="/about" component={About}/>
            <Route path="/cart" component={ShoppingCart}/>
            <Route path="/command-form" component={ShoppingCartCommandForm}/>
          </Switch>      
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// Implement the home, contact and about components