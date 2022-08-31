import "./styles.css";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import ItemDetails from "./itemDetails";
import { Route } from "react-router-dom";
import { useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/shop" exact>
          <Shop />
        </Route>
        <Route path="/shop/:id">
          <ItemDetails />
        </Route>
      </main>
    </div>
  );
}
