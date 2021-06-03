import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  // reducer: { counter: counterSlice.reducer },
  reducer: { counter: counterReducer, auth: authReducer },
});

// counterSlice.actions.toggleCounter()
// returns an action object of this shape:
// {type: 'some auto-generated unique identifier'}

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return { ...state, showCounter: !state.showCounter };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

export default store;
