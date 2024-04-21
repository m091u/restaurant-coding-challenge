const Restaurant = ({ restaurant }) => {
  return (
    <div className="restaurant">
      <h2>{restaurant.name}</h2>
      <p>
        Cuisines: {restaurant.cuisines.map(cuisine => cuisine.name).join(', ')}
      </p>
      <p>Rating: {restaurant.rating.starRating}</p>
      <p>
        Address: {restaurant.address.firstLine}, {restaurant.address.postalCode}, {restaurant.address.city} 
      </p>
    </div>
  );
};

export default Restaurant;
