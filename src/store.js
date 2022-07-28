import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./redux/reducer";


// const store = configureStore({
//     reducer: {
//         reducer
//     }
// });

const store = createStore(reducer);

export {store}