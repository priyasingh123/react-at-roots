import { useParams } from "react-router-dom"
import {useEffect} from 'react'
import img1 from '../utils/img/img1.jpg';
import img2 from '../utils/img/img2.jpg';
import img3 from '../utils/img/img3.jpg';
import { addItem } from "../redux-store/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const dispatch = useDispatch()
    const {resId} = useParams()

    const menuList = [
        {id:1, menu:[{dish: 'dal chawal', price: 200}, {dish: 'bhindi', price:400}, {dish:'gobhi', price:600}], image: img1},
        {id:2, menu:[{dish: 'chowmein', price: 100}, {dish:'momos', price:300}, {dish: 'spring roll', price:500}], image: img2},
        {id:3, menu:[{dish: 'ice cream', price:400}, {dish: 'cake', price:800}, {dish:'halwa', price:1200}], image: img3}

    ]

    //filter returns an array of items for which condition hold true
    const selectedMenu = menuList.filter ((item) => {
        return item.id == resId
    })
    //console.log (selectedMenu)

    useEffect (() => {
        // make API call here with res.id

    },[])

    const handleAdd = (menuItem) => {
        dispatch(addItem({'dish':menuItem.dish, 'price':menuItem.price }))
    }

    return (
        <div>
            <h1>Menu </h1>
            <img src={selectedMenu[0].image} width="200px" height="200px"/>
            <ul>
            {selectedMenu[0].menu.map((menuItem, index) => {
                return <li className="menu-item" key={index}>{`${menuItem.dish} - ${menuItem.price}`} <button onClick={()=>handleAdd(menuItem)}>ADD</button></li>
            })}
            </ul>
        </div>
    )
}

export default RestaurantMenu