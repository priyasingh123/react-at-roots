import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import React, {lazy, Suspense} from "react"
import AboutUs from './src/components/AboutUs'
import ErrorComponent from './src/components/ErrorComponent'
import ContactUs from './src/components/ContactUs'
import RestaurantMenu from './src/components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// we will not import Grocery like normal import, but will load lazy 
//import Grocery from './src/components/Grocery'


const Grocery = lazy(()=> import("./src/components/Grocery"))
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            {/* Outlet is replaced by component which is matching condition in appRouter*/}
            <Outlet/>
        </div>
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
            }
        ],
        errorElement: <ErrorComponent />
    }
    

])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)