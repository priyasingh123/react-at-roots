
//import from node_modules
import React from 'react'
import ReactDOM from 'react-dom/client'


//second parameter of React.createElement() is attribute and third is children
//both children and attribute comes in props if we see in console


/*if we want to have a nested html like 
<div id="parent">
    <div id="child">
        <h1>nested </h1>
        <h2>sibling </h2>
    </div> 
</div>*/

const element = React.createElement(
    "div", {id: "parent"}, React.createElement(
        "div", {id: "child"}, [React.createElement(
            "h1", {}, "nested "
            ), React.createElement(
                "h2", {}, "sibling"
                )
            ]
        )
    )



const head = React.createElement("h1", {id: "head"}, "Hello World from React")

//this will print an object which is a react element 
console.log (head)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(element)