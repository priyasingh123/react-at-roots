import {Link} from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import { useContext } from 'react'

import LoginUser from '../context/LoginUser'
import { useSelector } from 'react-redux'

const Header = () => {
    //useOnlineStatus is custom hook
    const onlineStatus = useOnlineStatus()
    const {user} = useContext(LoginUser)

    //subscribe to small portion of store, which is accessed by store.cart.items using hook useSeletor 
    const cartItems = useSelector((store) => store.cart.items)
    console.log (cartItems)
    return (
        <div className="header">
            <div className='logo-container'>
                <img className="logo" src="https://t3.ftcdn.net/jpg/03/74/73/78/360_F_374737839_VsxlmnN7soqOOOFFzy5kfE9H6PFMCkPX.jpg"
                />
            </div>
            <div className="nav-items">
                <ul >
                    <li><button className={`status ${onlineStatus}`}></button></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li> <Link to="/cart">Cart ({cartItems.length})</Link></li>
                    <li>{user}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;