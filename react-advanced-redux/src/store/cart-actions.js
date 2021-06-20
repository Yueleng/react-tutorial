import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = (cartData) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-b4926-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(cartActions.replaceCart(cartData.items));
      dispatch(uiActions.replaceUi(cartData.cartIsVisible));
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetech data success",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetech data failed",
        })
      );
    }
  };
};

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      // console.log(cartData);
      const response = await fetch(
        "https://react-b4926-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cartIsVisible: cartData.cartIsVisible,
            items: {
              totalPrice: cartData.items.totalPrice,
              totalQuantity: cartData.items.totalQuantity,
              items: cartData.items.items || [],
            },
          }), // body accept JSON data
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Sending!",
          message: "Send cart data successfully",
        })
      );
    } catch (e) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Send cart data failed",
        })
      );
    }
  };
};
