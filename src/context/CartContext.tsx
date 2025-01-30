import { createContext, useEffect, useReducer, useState } from "react";
import { cartReducer, CartState, Coffee, OrderData } from "../cart/reducer";
import { useNavigate } from "react-router-dom";
import {
  addItemToCartAction,
  checkoutOrderAction,
  decrementQuantityAction,
  incrementQuantityAction,
  removeItemFromCartAction,
} from "../cart/actions";
interface CartContextData {
  cart: Coffee[];
  order: OrderData;
  quantity: number;
  updateQuantity: (quantity: number) => void;
  addItemToCart: (coffee: Coffee) => void;
  incrementItem: (coffeeId: number) => void;
  decrementItem: (coffeeId: number) => void;
  removetItem: (coffeeId: number) => void;
  checkoutOrder: (data: any) => void;
}

interface CartContextProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextData);

const initialState: CartState = {
  cart: [],
  order: {
    cep: "",
    street: "",
    number: 0,
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    selectedPaymentOption: "",
  },
};

export const CartContextProvider = ({ children }: CartContextProps) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
    const savedCart = localStorage.getItem("@coffee-delivery:cart");
    return savedCart ? JSON.parse(savedCart) : initialState;
  });
  const { cart, order } = cartState;

  const updateQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const addItemToCart = (coffee: Coffee) => {
    dispatch(addItemToCartAction(coffee));
  };

  const incrementItem = (coffeeId: number) => {
    dispatch(incrementQuantityAction(coffeeId));
  };

  const decrementItem = (coffeeId: number) => {
    dispatch(decrementQuantityAction(coffeeId));
  };

  const removetItem = (coffeeId: number) => {
    dispatch(removeItemFromCartAction(coffeeId));
  };

  const checkoutOrder = (data: any) => {
    dispatch(checkoutOrderAction(data));
    dispatch({ type: "CHECKOUT_ORDER", payload: { data } });
    setQuantity(0);
    navigate("/success");
  };

  useEffect(() => {
    localStorage.setItem("@coffee-delivery:cart", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        quantity,
        updateQuantity,
        addItemToCart,
        cart,
        order,
        incrementItem,
        decrementItem,
        removetItem,
        checkoutOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
