const withPromoted = (RestaurantCard) => {

    const enhancedRestaurantCard = (props) => {
        return (<>
                <label>Promoted</label>
                <RestaurantCard {...props}/>
            </>
            
            
        )
    }

    return enhancedRestaurantCard;
}

export default withPromoted