
import React from "react";
import {Button, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";
import { likedRobot } from "../redux/dispatchActions";

let cardNumber = 0;

const CardMakerArrow = ({data}) => {

  return(
    <div>
      <CardGroup>
          {data.map((person) => {
            ++cardNumber
            return( 
          <Card key = {cardNumber}>
            <CardImg
              className="photo"
              alt="Card image cap"
              src={person.avatar}
              top
            />
            <CardBody>
              <CardTitle tag="h5">
              {person.first_name} {person.last_name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Bachelor Number {person.id}
              </CardSubtitle>
              <CardText>
                This robot is looking for a partner. 
                They are {person.gender}.
              </CardText>
              <Button block onClick ={ () => {window.location = `mailto:${person.email}`}}
              color = "primary" >
                Send a Message
              </Button>
              <Button block onClick ={ () => {
                likedRobot(person.id);
              }}
              color = "success" >
                Love
              </Button>
            </CardBody>
          </Card>
          )
          }
          )
        }
       </CardGroup>
    </div>

  )
  ;
};


// class CardMaker extends React.Component{
//   constructor(props){
//     super(props);
//     this.state=null;
//   }

//   render(){
//     return(
//         <CardGroup>
//           <h1 className="text-center mb-4">Robot Romance</h1>
//             <h2 className="text-center mb-4">Tired of dating humans? Try turning on an Automaton!</h2>
//             <h2 className="text-center mb-4">Find the one to your zero. Then send them a message!</h2>
//           {data.map((person) => {
//             return(
              
//           <Card key = {person.id}>
            
//             <CardImg
//               className="photo"
//               alt="Card image cap"
//               src={person.avatar}
//               top
//             />
//             <CardBody>
//               <CardTitle tag="h5">
//               {person.first_name} {person.last_name}
//               </CardTitle>
//               <CardSubtitle
//                 className="mb-2 text-muted"
//                 tag="h6"
//               >
//                 Bachelor Number {person.id}
//               </CardSubtitle>
//               <CardText>
//                 This robot is looking for a partner. 
//                 They are {person.gender}.
//               </CardText>
//               <Button onClick ={ () => {window.location = `mailto:${person.email}`}}
//               color = "primary" >
//                 Send a Message
//               </Button>
//             </CardBody>
//           </Card>
//           )
//           }
//           )
//         }
//         </CardGroup>
//         )
//   }

// }


// const cardMaker = data.map(person => 
// <CardGroup>
//   <Card>
//     <CardImg
      
//       className="photo"
//       alt="Card image cap"
//       src={person.avatar}
//       top

//     />
//     <CardBody>
//       <CardTitle tag="h5">
//       {person.first_name} {person.last_name}
//       </CardTitle>
//       <CardSubtitle
//         className="mb-2 text-muted"
//         tag="h6"
//       >
//         Bachelor Number {person.id}
//       </CardSubtitle>
//       <CardText>
//         This robot is looking for a partner. 
//         They are {person.gender}.
//       </CardText>
//       <Button onClick ={ () => {window.location = `mailto:${person.email}`}}
//       color = "primary" >
//         Send a Message
//       </Button>
//     </CardBody>
//   </Card>
// </CardGroup>
//   )


export {CardMakerArrow};