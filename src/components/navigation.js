import React, { useState } from "react"

import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import { CardMakerArrow } from "./CardMakerArrow";
import { MockCode } from "./MockCode";
import classnames from "classnames"
import { RandoRobo } from "./RandoRobo";
import {FormRobotSearch} from "./FormRobotSearch"
import { LikedCardsList } from "./LikedCards";
import { TickClassV2 } from "./ClockClasses";
import { ClockFunc } from "./ClockFunctions";


const Navigation = ({jsonData})=>{
    const [activeTab, setActiveTab] = useState(1)   
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() =>setActiveTab(1)}>
                        Uno
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() =>setActiveTab(2)}>
                        Dos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() =>setActiveTab(3)}>
                        Tres
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '4' })}
                        onClick={() =>setActiveTab(4)}>
                        Quatro
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '5' })}
                        onClick={() =>setActiveTab(5)}>
                        Cinco
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '6' })}
                        onClick={() =>setActiveTab(6)}>
                        Seis
                    </NavLink>
                </NavItem>

            </Nav>
            <TabContent activeTab={activeTab}>
                    <TabPane tabId={1} className = "tabId1">
                        <h1 className = "text-center">Robot Romance</h1>
                        <h2 className="text-center mb-4">Tired of dating humans? Try turning on an Automaton! Find the <code>1</code> to your <code>0</code>! </h2>
                        <h2 className="text-center mb-4">See any robot that pushes just the right buttons?</h2>
                        <h2 className="text-center mb-4">Push their buttons to send them a message or save their profile for later!</h2>
                        <CardMakerArrow  data = {jsonData}/>
                    </TabPane>
                    <TabPane tabId={2}  className = "tabId2">
                        <h1>Overwhelmed by choice?</h1>
                        <h2> Let us find the Automaton you can connect with. </h2>
                        <h2> Our totally not* random algorithm will match you with the robot of your dreams. Give it a whirl! </h2>
                        <RandoRobo data = {jsonData}/>
                    </TabPane>
                    <TabPane tabId={3}  className = "tabId3">
                        <h1>Narrow the Field</h1>
                        <FormRobotSearch data = {jsonData}/>
                    </TabPane>
                    <TabPane tabId={4}  className = "tabId4">
                        <h1>Your favorite Automatons. </h1>
                        <h2>Send them a message!</h2>
                        <LikedCardsList data = {jsonData}/>
                        {/* <CardMakerArrow data = {store.getState()}/> */}

                    </TabPane>

                    <TabPane tabId={5}  className = "tabId5">
                        <h1> React Practice </h1>
                        <h2>A place to display 2 practice components:</h2>
                        <h2>A welcome component and a Class Component that displays the clock.</h2>
                        <TickClassV2/>

                    </TabPane>
                    <TabPane tabId={6}  className = "tabId6">
                        <h1>It all ends here.</h1>
                        <h2>Here's the database.</h2>
                        <MockCode/>
                    </TabPane>
                </TabContent>
        </div>
    )}


//   <div
//   <TabContent activeTab="1">
//     <TabPane tabId="1">
//       <Row>
//         <Col sm="12">
//           <h4>
//             Tab Uno: This is where the magic happens.
//           </h4>
//           {/* <CardMaker/> */}
//         </Col>
//       </Row>
//     </TabPane>
//     <TabPane tabId="2">
//       <Row>
//         <Col sm="12">
//           <h4>
//             Tab Dos: This is behind the scenes of where the magic happens.
//           </h4>
//         </Col>
//       </Row>
//     </TabPane>
//     <TabPane tabId="3">
//       <Row>
//         <Col sm="12">
//           <h4>
//             Tab Tres: Hola amigo! Aqui, hablamos espanol. 
//           </h4>
//         </Col>
//       </Row>
//     </TabPane>
//   </TabContent>
// </div>




export {Navigation};
