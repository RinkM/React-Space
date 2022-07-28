import { store } from "../store"

// ! Actions (event that happened)
// subscribe does the action when the store changes.

store.subscribe(() =>{
    console.log("store changed", store.getState())
})


const likedRobot = (id) =>{store.dispatch ({type: "likedRobot",
                    payload: {
                        robotId : id}}

)}
const removedRobot = (id) => store.dispatch({type: "removedRobot",
                        payload:{
                            robotId : id}}
)
const messagedRobot = (id) =>store.dispatch( {type : "msgRobot",
                        payload:{
                            robotId: id}}
                            )

export {likedRobot, removedRobot, messagedRobot}