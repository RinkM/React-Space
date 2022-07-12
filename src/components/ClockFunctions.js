import { React, useState } from "react";
import { Welcome } from "./welcome";


// https://itnext.io/how-to-work-with-intervals-in-react-hooks-f29892d650f2


const ClockFunc = () => {
  const [person, setPerson] = useState("Adam");
  const [creature, setCreature] = useState("Manx Cat")
    return(

    <div className="App">   
        Hello Fellow Clocks!
        <h3><Welcome name = {person} animal = {creature}/></h3>
        <h4>The time is {new Date().toLocaleTimeString()}</h4>
        
    </div>
  );
}


export {ClockFunc}
