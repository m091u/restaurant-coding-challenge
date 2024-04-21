import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/restaurants")
      .then((resp) => {
        setRestaurants(resp.data);
        console.log("this is the data:", resp.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>Restaurant finder</h1>
      <p>Find restaurant data and return this in an interface of your choice</p>
      <div className="restaurants">
        {restaurants.map((restaurant) => (
          <div className="restaurant" key={restaurant.id}>
            <h2>{restaurant.name}</h2>
            <p>Cuisine: {restaurant.cuisines[0].name}, {restaurant.cuisines[1].name}</p>
            <p>Rating: {restaurant.rating.starRating}</p>
            <p>
              Address: {restaurant.address.city}{" "}
              {restaurant.address.firstLine}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
