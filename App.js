import React from "react";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Home} from "./components/Home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Catalog} from "./components/Catalog/Catalog";
import {CartPage} from "./components/Cart/CartPage";



const App = () => {
  return (
      <div>
          <BrowserRouter>
              <div>
                  <Switch>
                      <Route exact path="/">
                          <Header/>
                          <Home/>
                      </Route>
                      <Route path="/catalog">
                          <Catalog/>
                      </Route>
                      <Route path="/cart">
                          <Header/>
                          <CartPage/>
                      </Route>
                  </Switch>
                  <Footer/>
              </div>
          </BrowserRouter>
      </div>
  );
};

export default App;
