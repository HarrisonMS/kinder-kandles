import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";
import data from "./data";
import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import "./styles.css";

const App = () => {
  const [product] = useState(data);

  return (
    <div className="App">
      <nav>
        <h1 className="store-header">Kinder Kandles</h1>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/item-list">Shop</NavLink>
        </div>
      </nav>

      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/item-list"
        render={(props) => (
          <ItemsList
            {...props} // this is the same as below
            // match={props.match}
            // history={props.history}
            // location={props.location}
            items={product}
          />
        )}
      />

      <Route
        path="/item-list/:id"
        render={(props) => <Item {...props} items={product} />}
      />
    </div>
  );
};
export default App;
