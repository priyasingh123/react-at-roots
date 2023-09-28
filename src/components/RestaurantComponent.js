import withPromoted from "./withPromoted"

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <h4>{props.restaurant?.name}</h4>
            <img src={props.restaurant.image}/>
        </div>
    )
}

export default RestaurantCard