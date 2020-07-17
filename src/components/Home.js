import React from "react";
import HeaderImage from "../images/candlesSpace.jpg";
function Home(props) {
  const routeToShop = (event) => {
    props.history.push("/item-list");
  };

  console.log(routeToShop);

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://lh3.googleusercontent.com/csFDcgdvoJl2YjSUepKzC3tTKol0dHrdY40t0swPuhQ807CB0Dwu5iYVIfUkWemv2huteY-orYQmi54tFgCOFUHyCeRXtnIH141r0p0gvHNpCbWhKQ_DGR8QU5ggqJTN5YLpwh74Ee-sChu2lhMAfXfWL-HgB4eWmWR7skeHzCyZAvN5a5wWmwrVcIZGuqq7j0q9bIJE_eJnWIEi6o0zFzskkHHt68Pjnms1dyj8Cmqh2AC6hDMKl2f6_x9Rb_eYkjnTHGejtb6lwdO0d2i8mr7Akbj8P_1aO-rBqOLKhvNvODuIakL_0zC9bqAQeFtzQTaqvMDP9yfyXo-GFXigpgF8TcNKF7Ij4zKJiw5WAEF4o4lbcXdgX7YFZiiWNKRHNRBOSXOq5f4sH2SDB4Go_v6Lp1hLAYqUb-FRH-b_atnZGzUMpkZ2GiBY8mjHlaitEQnWNJBQgrY9sYHmNAuh1NkyYp74ANtl0scU3-ER4RYWHO7eLeapTjQHyFZrTxEkm1lI7iUBOUufzF_FtNjIvSqMFM0sVuA2qOadXcdFouLZTAHnDMxVXoIZOrKPu0dcB8bFXX52SAuOUUGQ1Mhc8tn56lyEbEacAHsIk4aeGzc-3bz6fsjCLkT1F9SF0Ezvyj_CjJ0jBZ3qUgjavFOmDSmyIKDXQ7wmlxyV_qaoOUFLyAbeDzDkjA8a5SlKmA=w1920-h602-no?authuser=0"
        alt="candle in space"
      />
      <button onClick={routeToShop} className="md-button shop-button">
        Shop now!
      </button>
    </div>
  );
}

export default Home;
