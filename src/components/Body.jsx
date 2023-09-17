import React from "react"
import RestaurantCard from './RestaurantComponent'
import img1 from '../utils/img/img1.jpg';
import img2 from '../utils/img/img2.jpg';
import img3 from '../utils/img/img3.jpg';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; 


const Body = () => {
    const onlineStatus = useOnlineStatus()

    // const ListOfRestaurants = useState([])
    const ListOfRestaurants = [{id: 1, name: 'KFC', items: 'Burger, Fries, shakes', image: img1},
            {id: 2, name: 'Dominos', items: 'Pizza, Garlic Bread, cake', image: img2},
            {id: 3, name: 'Bikanerwala', items: 'coke, ice-cream, shakes', image: img3},
        ]

    // useEffect (() => {
    //     fetchData()
    // }, [])

    // fetchData = async () => {
    //     // const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
        
    //     // const response = await res.json()
        
    // }


        if (!onlineStatus) {
            return <h1>You are offline</h1>
        }
    return (
        <div className='body'>
            <div className='search'>
                <button className='filter-btn'>Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {ListOfRestaurants.map ((restaurant) => {
                    return <Link key={restaurant.id} to={`/restaurants/${restaurant.id}`}><RestaurantCard  restaurant={restaurant}/></Link>
                })}
            </div>

        </div>
    )
}

export default Body;