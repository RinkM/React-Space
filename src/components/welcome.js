import React from "react"

  class Welcome extends React.Component {
    render() {
      return (
      <div>
      <h1> Welcome, {this.props.name}</h1> 
      <h2>You are a {this.props.animal}</h2>
      </div>
      )
    }
   }

 export {Welcome}