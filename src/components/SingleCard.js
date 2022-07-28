import React from "react";
import {Button, CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from "reactstrap";
import { likedRobot } from "../redux/dispatchActions";
import { store } from "../store";

const SingleCard = ({person})=> {
  if (person){
    return(
        <CardGroup>
          <Card>
            <CardImg
              className="photo"
              alt="Robot Avatar"
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
              <Button onClick ={ () => {window.location = `mailto:${person.email}`}}
              color = "primary" >
                Send a Message
              </Button>
              <Button block onClick ={ () => {
                likedRobot(person.id);
                console.log(store.getState())
              }}
              color = "success" >
                Love
              </Button>
            </CardBody>
          </Card>
       </CardGroup>
    )
  }
}




export {SingleCard}
