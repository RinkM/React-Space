import { React, useState } from "react";
import { Welcome } from "./welcome";


// https://itnext.io/how-to-work-with-intervals-in-react-hooks-f29892d650f2



// Function Templates:
// function App() {
//   return <div className="App">Hello World!</div>;
// }

// // OR (arrow-function syntax)

// const App = () => {
//   return <div className="App">Hello World!</div>;
// };

// // OR (implicit return)

// const App = () => <div className="App">Hello World!</div>;

// export default App;


const ClockFunc = () => {
  const [person, setPerson] = useState("Adam");
    return(

    <div className="App">
        Hello Fellow Clocks!
        <h3><Welcome name = {person} animal = "Manx Cat"/></h3>
        <h4>The time is {new Date().toLocaleTimeString()}</h4>
        
    </div>
  );
}


export {ClockFunc}
