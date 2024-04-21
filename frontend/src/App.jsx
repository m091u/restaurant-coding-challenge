import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Restaurant from "./components/Restaurant";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/restaurants")
      .then((resp) => {
        setRestaurants(resp.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <h1>Restaurant finder</h1>
      <h3>Restaurant details for postal code LS2 7HY</h3>
      <div className="restaurants">
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}  restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}

export default App;
