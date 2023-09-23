import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import React, {lazy, Suspense, useState} from "react"
import AboutUs from './src/components/AboutUs'
import ErrorComponent from './src/components/ErrorComponent'
import ContactUs from './src/components/ContactUs'
import RestaurantMenu from './src/components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import {Provider} from 'react-redux'
import LoginUser from './src/context/LoginUser'
import appStore from './src/redux-store/store'
import CartPage from './src/components/CartPage'


// we will not import Grocery like normal import, but will load lazy 
//import Grocery from './src/components/Grocery'


const Grocery = lazy(()=> import("./src/components/Grocery"))

const AppLayout = () => {
    const [user, setUser] = useState('UpdateName')
    return (
        <Provider store={appStore}>
            <div className="app">
            <LoginUser.Provider value={{ user, setUser }}>
                <Header />
                <Outlet />
            </LoginUser.Provider>
            </div>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <AboutUs />
            },
            {
                path: '/contact',
                element: <ContactUs />
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path: '/cart',
                element: <CartPage/>
            }
        ],
        errorElement: <ErrorComponent />
    }
    

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)