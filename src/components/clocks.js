// import React from "react";
// import {createRoot} from 'react-dom/client';




// Here is an example componant made via CLASS. 
// uses newdate()  but also...this.props.date to do the same thing. 
// not sure how they connect.

  
  // V2 adds constructors, super and mounting,  allows CLASS component to update itself.
  
  
  
  // const root = createRoot(document.getElementById('root'));
  // root.render(<TickClassV2 />);
  
  // will update the date by creating a date prop.
  // const ticker = ()=>{
  //   root.render(<TickClass date = {new Date()}/>)
  // }
  
  
  
  // Here is an example componant made via Functions.
  // function TockFunc (props){
  //   return(<div>
  //       <Welcome name="Leena" animal = "baby" />
  //       <h1>Tock says "Hello, World"</h1>
  //       <h2>The time is {props.date.toLocaleTimeString()}</h2>
  //     </div>
  //   );
  //   }
  
    // const tocker = ()=>{
    //   root.render(<TockFunc date={new Date()} />);
    // }
  
  
  
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
  