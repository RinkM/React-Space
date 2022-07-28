# Questions 
createstore vs configurestore.   what are you familiar with?   
index.js import store...?

filename style, 

store and hooks.  not allowed to be edited directly.
need other function to edit.  Why the setters?   Why not change directly?
Are there hidden properties?   

LikedCards doesn't use the HOOK variabile "likedRobots"  but the app works... 

using a slice of store vs whole store?   
how would a slice work in these circumstances?
For what I have, store is really small.  (3 KV pairs)
Slice would be overkill?


complaint terms: props, store, hooks, lifecycle, promise, reducers
props as in properties?   or props like theater?

console.log prints twice...
https://stackoverflow.com/questions/62185425/why-is-console-log-logging-twice-in-react-js
it is designed that way.  
will do so when under strictmode
no way around it other than taking off strict mode. 


# Todo :

add a heart button on cards. 


I feel like state is
it doesn't hold everything. it holds what I want. What I define.
It should hold all the 'moving' parts.  Items that change, toggle, add, etc.

store or state?   difference?  
is the idea: state of the store?


//? REDUX STEPS
// 1 define store, what is it? what data is it?
// 2 define actions - what can a user do in app?
// 3 Create reducer - take teh action and return the store.
// 4 Set up the store based on your reducers. 



// ! Store Description
// will store objects with 3 data points.
// likedId increments as objects get added,(is this neccesary?)
// robotId to refer to jsondata ID #.
// messaged - did you click the message button?

// What the store will store:

let storeExample =[
    {likedId: 1,
    robotId: 5,
    messaged: false
},
    {likedId: 2,
    robotId: 52,
    messaged: false
},]

