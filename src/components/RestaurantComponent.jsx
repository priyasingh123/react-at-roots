const RestaurantCard = ({restaurant}) => {
    return (
        <div className="res-card">
            <h4>{restaurant?.name}</h4>
            <img src={restaurant.image}/>
        </div>
    )
}

export default RestaurantCard 