import React from "react";
import { Route, NavLink } from "react-router-dom";

import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";

function Item(props) {
  console.log(props);
  const item = props.items.find(
    (thing) => thing.id === Number(props.match.params.id)
  );

  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        <NavLink exact to={`/item-list/${item.id}`}>
          the story
        </NavLink>
        <NavLink to={`/item-list/${item.id}/shipping`}>shipping</NavLink>
      </nav>
      <Route
        exact
        path="/item-list/:id"
        render={() => <ItemDescription item={item} />}
      />
      <Route
        path="/item-list/:id/shipping"
        render={() => <ItemShipping item={item} />}
      />
    </div>
  );
}

export default Item;
