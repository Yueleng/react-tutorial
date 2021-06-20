import { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { uiActions } from "./store/ui-slice";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData as fetchData } from "./store/cart-actions";

let isInitial = true;
function App() {
  const cartIsVisible = useSelector((state) => state.ui.cartIsVisible);
  const cartIsVisibleChanged = useSelector((state) => state.ui.changed);
  const items = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    const dataToSave = {
      cartIsVisible,
      items,
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    if (items.changed || cartIsVisibleChanged) {
      dispatch(sendCartData(dataToSave));
    }
  }, [cartIsVisible, items, dispatch, cartIsVisibleChanged]);

  // useEffect(() => {
  //   const dataToSave = {
  //     cartIsVisible,
  //     items,
  //   };

  //   const saveCart = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "pending",
  //         title: "Sending...",
  //         message: "Sending cart data!",
  //       })
  //     );
  //     const response = await fetch(
  //       "https://react-b4926-default-rtdb.firebaseio.com/cart.json",
  //       {
  //         method: "PUT",
  //         body: JSON.stringify(dataToSave), // body accept JSON data
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }

  //     dispatch(
  //       uiActions.showNotification({
  //         status: "success",
  //         title: "Sending!",
  //         message: "Send cart data successfully",
  //       })
  //     );
  //   };

  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   saveCart().catch((e) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: "error",
  //         title: "Error!",
  //         message: "Send cart data failed",
  //       })
  //     );
  //   });
  // }, [cartIsVisible, items, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
