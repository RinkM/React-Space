//! Reducers

let lastId = 0;

//? this is where state is defined: 
const reducer = (state = [], action) =>{
    if (action.type === "likedRobot"){
        return [...state,
            {likedId : ++lastId,
            robotId: action.payload.robotId,
            messaged:false
            }
        ]
    }else if (action.type === "removedRobot"){
        return state.filter(item=> item.robotId !== action.payload.robotId)
    
    } else if (action.type === "messagedRobot"){
        return [...state,
                {messaged:true
                }]

    } else {
        return state}
    
}


export {reducer}