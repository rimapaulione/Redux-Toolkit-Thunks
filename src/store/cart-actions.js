import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

//Action Creator Thunk get Data
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-redux-719e2-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Error!!!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          cartItems: cartData.cartItems || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          message: "Something went wrong!",
          title: "Error!",
          status: "error",
        })
      );
    }
  };
};

//Action Creator Thunk sendRequest
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        message: "Sending cart data!",
        title: "Sending...",
        status: "pending",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-redux-719e2-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            cartItems: cart.cartItems,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          message: "Sent cart data successfully!",
          title: "Success!",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          message: "Something went wrong!",
          title: "Error!",
          status: "error",
        })
      );
    }
  };
};
