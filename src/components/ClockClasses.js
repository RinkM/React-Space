
import React from "react";
import { Welcome } from "./welcome";

// V2 adds constructors, super and mounting, 
//    allows CLASS component to update itself.

  class TickClassV2 extends React.Component{
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount(){
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
    tick(){
      this.setState({
        date:new Date()
      });
    }
  
    render(){
      return ( 
      <div>
        <Welcome name="Jamie" animal = "woman" />
        <h1>TickV2 says "Hello, World"</h1>
        <h2>The time is {new Date().toLocaleTimeString()}.</h2>
        <h2>The prop time is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
      );
    }
  }



// first try at creating a class. this.props shouldn't work..? 
// needs constructor + super.
class TickClass extends React.Component{
    render(){
      return ( 
      <div>
        <Welcome name="Jamie" animal = "woman" />
        <h1>Tick says "Hello, World"</h1>
        <h2>The time is {new Date().toLocaleTimeString()}.</h2>
        <h2>The prop time is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
      );
    }
  };
  
export {TickClassV2, TickClass}