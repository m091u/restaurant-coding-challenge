import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M%20RF")
      .then((resp) => {
        setRestaurants(resp);
        console.log("this is the data:", resp);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>Restaurant finder</h1>
      <p>Find restaurant data and return this in an interface of your choice</p>

      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <p>Restaurant name: {restaurant.name}</p>
          <p>Restaurant cuisine: </p>
          <p>Restaurant rating: {restaurant.rating.starRating}</p>
          <p>
            Restaurant address: {restaurant.address.city}{" "}
            {restaurant.address.firstLine}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
