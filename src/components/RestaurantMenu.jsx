import { useParams } from "react-router-dom"
import {useEffect} from 'react'
import img1 from '../utils/img/img1.jpg';
import img2 from '../utils/img/img2.jpg';
import img3 from '../utils/img/img3.jpg';

const RestaurantMenu = () => {
    const {resId} = useParams()
    console.log (resId)

    const menuList = [
        {id:1, menu:['dal chawal', 'bhindi', 'gobhi'], image: img1},
        {id:2, menu:['chowmein', 'momos', 'spring roll'], image: img2},
        {id:3, menu:['ice cream', 'cake', 'halwa'], image: img3},

    ]

    const selectedMenu = menuList.filter ((item) => {
        return item.id == resId
    })
    console.log (selectedMenu)

    useEffect (() => {
        // make API call here with res.id

    },[])


    return (
        <div>
            <h1>Menu </h1>
            <img src={selectedMenu[0].image} width="200px" height="200px"/>
            <p>{selectedMenu[0]?.menu.join(",")}
            </p>
        </div>
    )
}

export default RestaurantMenu