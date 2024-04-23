import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Restaurant from "./components/Restaurant";
import PostCodes from "./components/PostCodes";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [postcode, setPostcode] = useState("CT1 2EH");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/restaurants/${postcode}`)
      .then((resp) => {
        setRestaurants(resp.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, [postcode]);

  const handlePostCodeChange = (newPostcode) => {
    setPostcode(newPostcode);
  };

  const sortedRestaurants = [...restaurants].sort(
    (a, b) => b.rating.starRating - a.rating.starRating
  );

  return (
    <>
      <h1>Restaurant finder</h1>
      <PostCodes onChange={handlePostCodeChange} />
      <h3>Displaying restaurant details for post code {postcode}</h3>
      <div className="restaurants">
        {sortedRestaurants.map((restaurant) => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}

export default App;
