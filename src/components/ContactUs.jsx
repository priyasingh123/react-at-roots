import User from "./User"
import UserClass from "./UserClass"
import React from 'react'


class ContactUs extends React.Component{
    constructor (props) {
        super(props)

    }

    componentDidMount () {
        this.interval = setInterval(() => {
            console.log ('Hello')
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    
    render (){
        return(
            <div >
                <h1>Contact Us</h1>
                <div className="contact-container">
                    <User name="Rekha Kumar" role="Employee" />
                    <UserClass name="Tanya Singh" role="Director" />
                </div>
            </div>
        )
    }
}

/*const ContactUs = () => {
    return (
        <div >
            <h1>Contact Us</h1>
            <div className="contact-container">
                <User name="Rekha Kumar" role="Employee" />
                <UserClass name="Tanya Singh" role="Director"/>
            </div>
            
        </div>
    )
}*/

export default ContactUs