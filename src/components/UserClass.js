import React from "react"
import LoginUser from "../context/LoginUser" 
// import fetch from 'node-fetch'

class UserClass extends React.Component {
    /*constructor (props) {
        super(props)
        this.state=({
            githubUser: {}
        })
        // console.log ("child constructor")
    }

    // make API call in componentDidMount 
    async componentDidMount() {
        // console.log ("child mounted")
        const res = await fetch('https://api.github.com/users/priyasingh123')
        const user = await res.json();
        this.setState({githubUser: user})
        //console.log (user)
    }
    
    render(){
        const {name, role} = this.props
        // console.log ("child render")
        return (
            
            <div className="user-card">
                <h3>{name}</h3>
                <h5>User details: 
                    <LoginUser.Consumer>{(data) => console.log ('context inside class based components:',data)}</LoginUser.Consumer>
                </h5>
                <h4>Role: {role}</h4>
                <p>{this.state.githubUser?.login}</p>
                <h4>Contact details:</h4>
                <p>Lorem ipsum dolor sit amet.yaya </p>
            </div>
        )
    }*/

    //for temporary
    render () {
        return (
            <div></div>
        )
    }
}

export default UserClass