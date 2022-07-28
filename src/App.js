
import React, {useEffect} from "react";
import { Container } from "reactstrap";
import Prism from "prismjs";
import './App.css';
import "prismjs/components/prism-json";
 
import {Navigation} from "./components/navigation";

const jsonData = require('../src/data/MOCK_DATA.json')


function App() {
useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="mt-5">
      <Container> 
        <Navigation jsonData={jsonData}/>
      </Container>
    </div>
    
  ); 
}

export default App;





