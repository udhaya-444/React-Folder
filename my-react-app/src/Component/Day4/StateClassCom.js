import React, { Component } from "react"
class StateClassCom extends Component
{
 state={
    color:"red",
    price:120
 }
 handleChang=() =>{this.setState({color:"green",price:169})}
 render()
 {
    return(
        <div>
            <h3>The color i have selected is {this.state.color} and price is {this.state.price}</h3>
            <button onClick ={this.handleChang}>Clickme</button>
        </div>
    )
 }
}
export default StateClassCom;