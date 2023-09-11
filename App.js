
import React from 'react'
import ReactDOM from 'react-dom/client'

//this is functional component
const Heading = () => {
    return (
        <h1>This is heading from component</h1>
    )
}

let num = 1000
//functional component without return 
const HeadingWithoutReturn = () => (
    <h1>heading without return</h1>
)

//jsxHeading is react element
const jsxHeading = <h1>This is heading{num+100+233+num}</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxHeading)

