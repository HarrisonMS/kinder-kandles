import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";
import data from "./data";
import Home from "./components/Home";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import CandleImage from "./images/kinderKandle.PNG";
import "./styles.css";

const App = () => {
  const [product] = useState(data);

  return (
    <div className="App">
      <nav>
        <div className="imgContainer">
          <img
            className="store-header"
            src="https://lh3.googleusercontent.com/VNsamn5JWhUwOO6dEilFteT1fsYVWHORgSc1HUK-1CNmTfZHYbaseNTVUrHlGjla2HGyH4cJ_OFT1JvNSdmkFSUdKqbtjtV5fxn42W_2Jrg7_W1MLD_TBBXQ9uli4m9eBeJp8bxE3Txm6tWD6mHNMZal18h6EolI__REdUy1ayrxMETLJUvnIHB5T5Dyo4fw4NrichLor3e7knabGBY8LNQFuQTe6ZKZmYf6_QmvNIJyd12DXJ0C5TOBq_o52OUdpq6rUN5sei8BKMdpmUXzn-abAce20mr6eihfNQZrgUCZVvd0ePU8wSI9CWpxROg_sYtrLx0inrI5YUIvktHCPwIKMmE9vAQ6CAqLhJzJ2wuaiH-fJEaZ-G2uiWcVwzcdOfBfXj10pucLaTZ6ScX9_04bBtEAMjmsXolhk7yF6KVlIC13MZrGFvmfW9Ld5-GSA-SIE4W-gbz8IIb1aHbNP7VYXoQK19lqJsX_L9hQdsHzNL359ghgsovqnwHQX7OAMCuEbDVXp9OdT-HQF47k7wkcHBRHQFGI9L2gC0sT8rxEaxEwDzIUn-H8hlCSUcpeI0k5aIL4GsuQoZXn4gpXWLmM-vljX9AM8O_8DOyAAivrpmoAl24BVwk10EiSzUGMKEtNbjDtuxs27LwzM0H5hI7dweKf5autAailGoYt9lkjkjqubVci6-dAWLE3kg=s104-no?authuser=0"
            alt="Kinder Kandles logo"
          />
        </div>
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
