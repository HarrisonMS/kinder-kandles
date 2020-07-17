import React from "react";
import HeaderImage from "../images/candlesSpace.jpg";
function Home(props) {
  const routeToShop = (event) => {
    props.history.push("/item-list");
  };

  console.log(routeToShop);

  return (
    <div className="home-wrapper">
      <img className="home-image" src={HeaderImage} alt="candle in space" />
      <button onClick={routeToShop} className="md-button shop-button">
        Shop now!
      </button>
    </div>
  );
}

export default Home;
