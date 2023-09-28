import { useDispatch, useSelector } from "react-redux"
import store from '../redux-store/store'
import { clearCart } from "../redux-store/cartSlice"

const CartPage = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    return (
        <div>
            <h3 className="cart-heading">Your Items <button onClick={()=>dispatch(clearCart())}>Clear Cart</button></h3>
            
            <ul className="cart-items">
                {cartItems.length == 0 ? <li>No Items in cart</li> :
                cartItems.map((items) => {
                    return <li key={items}>{items.dish} - {items.price}</li>
                })}
            </ul>
        </div>
    )
}

export default CartPage