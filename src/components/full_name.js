import React from 'react';
const data = require('../data/MOCK_DATA.json');

//This file is practice.  Not used in the full app.
// This file created 4 classes :  {RobotClass, RobotList, dataViewer, FullName};
// RobotCLass is the most "Fully" written Class component 
// FullName -  Attempt as a small / compact class :
// RobotList is a function component.
// Dataviewer is minimal.



// Creates a list of the full names from the database.
class RobotClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = null
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }

    render(){
        return(
            data.map((person)=> 
            <div key = {person.id}>
                
                {person.first_name} {person.last_name} 
                <img alt='avatar' src = {person.avatar}/>
            </div>)
        );
    }
}


// Attempt as a small / compact class : 
class FullName extends React.Component{
    render(){
        return(
            data.map((person)=> 
            <div>
                {person.first_name} {person.last_name} 
            </div>
        )
        )
    }
}






// example from React docs:
const dataViewer = data.map((person)=>
    <li>It's {person.first_name} {person.last_name} </li>);

// built as a function. 
function RobotList(props) {
    const dataViewer = data.map((person)=>
    <li key= {person.id}>Robot : {person.first_name} {person.last_name} </li>);
    return(
        <ol>{dataViewer}</ol>
    );
}



export {RobotClass, RobotList, dataViewer, FullName};