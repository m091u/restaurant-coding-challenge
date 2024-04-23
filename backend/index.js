const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server working");
});

app.get("/restaurants/:postcode", (req, res) => {
  const postcode = req.params.postcode;
  axios
    .get(
      `https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/${postcode}`
    )
    .then((response) => {
      const restaurants = response.data.restaurants.slice(0, 10);
      res.json(restaurants);
      
    })
    .catch((error) => {
      console.log("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
