
import {React, useState } from "react";
import {Button, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";
import { removedRobot } from "../redux/dispatchActions";
import { store } from "../store";

// !Problem Kinda.
//app works but my hook work right.

//use state - sets liked Robots to [] at the refresh of page.  
//wont' edit likedRobots even if store.getState() changes.  setlikedRobots hasn't been called yet.
// there is no way to update again... until it draws a card.   
// can I use setLikedRobots in another component to update likedRobots?
// or is this a sort of useEffect idea?
// or isn't that part of what redux can do?

// purpose of setLikedRobots is to re-draw the tab.  when it changes, the tab updates...
// but it doesn't matter what it changes to because likedRobots is never used...


let cardNumber = 0;
const LikedCardsList = ({data}) =>{
  const [likedRobots, setLikedRobots] = useState();
  return(
    <div>
      <CardGroup>
        {store.getState().map((item) => {
          const singlePerson = data.find(
            element=> element.id ===item.robotId
            ) 
            ++cardNumber
            return( 
          <Card key = {cardNumber}>
            <CardImg
              className="photo"
              alt="Card image cap"
              src={singlePerson.avatar}
              top
            />
            <CardBody>
              <CardTitle tag="h5">
              {singlePerson.first_name} {singlePerson.last_name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Bachelor Number {singlePerson.id}
              </CardSubtitle>
              <CardText>
                This robot is looking for a partner. 
                They are {singlePerson.gender}.
              </CardText>
              <Button block onClick ={ () => {window.location = `mailto:${singlePerson.email}`}}
              color = "primary" >
                Send a Message
              </Button>
              <Button block onClick ={ () => {
                removedRobot(singlePerson.id);
                setLikedRobots(store.getState());
              }}
              color = "danger" >
                Remove from List
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
      }


export {LikedCardsList}