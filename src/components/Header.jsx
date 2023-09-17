import {Link} from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

const Header = () => {
    const onlineStatus = useOnlineStatus()

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
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;