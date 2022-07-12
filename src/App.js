import React from 'react';
import './App.css';

import {TickClassV2} from "./components/ClockClasses.js"
import {ClockFunc} from "./components/ClockFunctions.js"

function App() {
  return (
    <div className ="App">
      <TickClassV2/>
      <ClockFunc/>
    </div>
  );
}
export default App;
