
import React, { useState } from "react";
import { SingleCard } from "./SingleCard";
import {Button} from "reactstrap";



const randomRobot =  ()=>{
    let randomNum = Math.floor(Math.random()*101);
    return(randomNum)
};

const RandoRobo = ({data})=>{
    const[robotId, setRobotID] = useState()
    const singlePerson = data.find(element=> element.id===robotId);
    return(
        <div>
            <Button onClick ={ () => {setRobotID(randomRobot())}}
              color = "primary" >
                Find Love
              </Button>
              <SingleCard person = {singlePerson}/>
             
            {/* <SingleCard person = {singlePerson}/> */}
            
        </div>
)}

export{RandoRobo}