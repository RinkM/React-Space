
import {createRoot} from 'react-dom/client';

import React from 'react';
import logo from './logo.svg';
import './App.css';


// Here is an example componant made via CLASS. 
// uses newdate()  but also...this.props.date to do the same thing. 
// not sure how they connect.
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
}

// V2 adds constructor and should allow component to update itself.
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


const root = createRoot(document.getElementById('root'));
// root.render(<TickClassV2 />);

// will update the date by creating a date prop.
const ticker = ()=>{
  root.render(<TickClass date = {new Date()}/>)
}

// Here is an example componant made via Functions.
function TockFunc (props){
  return(<div>
      <Welcome name="Leena" animal = "baby" />
      <h1>Tock says "Hello, World"</h1>
      <h2>The time is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
  }

  const tocker = ()=>{
    root.render(<TockFunc date={new Date()} />);
  }



  // function tocker() {
  //   root.render(<TockFunc date={new Date()} />);
  // }



// setInterval(TickClass,1000);
// setInterval(ticker, 500);

// setInterval(TockFunc,1000);
// setInterval(tocker, 1500);

// const Welcome = (props)=>{
//   <h1>Hello, {props.name}</h1>;
// }

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

    




function App() {
  return (
    <div className ="App">
      {/* <TickClass/> */}
      {<TickClassV2 />}
      {<TickClassV2 />}
      {/* <TockFunc/> */}
      
    </div>
  );
}
//     <div className="App">
//       {/* {element1}  */}
      

//       {/* {tick} */}


//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
