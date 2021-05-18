import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "add") {
    // concat gives you a new array.
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let newItems;
    if (existingCartItemIndex >= 0) {
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      newItems = [...state.items];
      newItems[existingCartItemIndex] = updatedItem;
    } else {
      newItems = state.items.concat(action.item);
    }

    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  } else if (action.type === "remove") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let newItems;
    if (existingItem.amount <= 1) {
      newItems = state.items.filter((item) => item.id !== action.id);
    } else {
      newItems = [...state.items];
      // newItems[existingCartItemIndex].amount -= 1;
      const newItem = {...existingItem, amount: existingItem.amount - 1}
      newItems[existingCartItemIndex] = newItem;
    }

    return {
      items: newItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "add", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "remove", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
