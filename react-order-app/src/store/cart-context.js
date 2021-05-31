// import { createContext, useState, useEffect } from "react";
import { createContext } from "react";

// default
const CartContext = createContext();

// const CartContent = createContext({
//     items: [],
//     totalAmount: 0,
//     addItem: (item) => {},
//     removeItem: (id) => {},
//     clearCart: () => {}
// })

export default CartContext;
