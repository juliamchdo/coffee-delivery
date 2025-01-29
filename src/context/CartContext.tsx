import { createContext, useEffect, useReducer, useState } from "react";
import { CartState, Coffee } from "../cart/reducer";
interface CartContextData {
  cart: Coffee[];
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
  order: [],
};

export const CartContextProvider = ({ children }: CartContextProps) => {
  const cartReducer = (state: CartState, action: any): CartState => {
    switch (action.type) {
      case "ADD_ITEM_TO_CART": {
        const isAlreadyAdded = state.cart.some(
          (item) => item.id === action.payload.coffee.id
        );

        const updatedCart = isAlreadyAdded
          ? state.cart.map((c) =>
              c.id === action.payload.coffee.id ? action.payload.coffee : c
            )
          : [...state.cart, action.payload.coffee];

        return { ...state, cart: updatedCart };
      }

      case "INCREMENT_ITEM": {
        const updatedCart = state.cart.map((c) =>
          c.id === action.payload.coffeeId
            ? { ...c, quantity: c.quantity + 1 }
            : c
        );
        return { ...state, cart: updatedCart };
      }

      case "DECREMENT_ITEM": {
        const updatedCart = state.cart.map((c) =>
          c.id === action.payload.coffeeId && c.quantity > 1
            ? { ...c, quantity: c.quantity - 1 }
            : c
        );
        return { ...state, cart: updatedCart };
      }

      case "REMOVE_ITEM_FROM_CART": {
        const updatedCart = state.cart.filter(
          (c) => c.id !== action.payload.coffeeId
        );
        return { ...state, cart: updatedCart };
      }

      case "CHECKOUT_ORDER": {
        return { cart: [], order: action.payload };
      }

      default:
        return state;
    }
  };

  const [cartState, dispatch] = useReducer(cartReducer, initialState, () => {
    const savedCart = localStorage.getItem("@coffee-delivery:cart");
    return savedCart ? JSON.parse(savedCart) : initialState;
  });
  const [quantity, setQuantity] = useState(0);
  const { cart } = cartState;

  const updateQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const addItemToCart = (coffee: Coffee) => {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: { coffee },
    });
  };

  const incrementItem = (coffeeId: number) => {
    dispatch({ type: "INCREMENT_ITEM", payload: { coffeeId } });
  };

  const decrementItem = (coffeeId: number) => {
    dispatch({ type: "DECREMENT_ITEM", payload: { coffeeId } });
  };

  const removetItem = (coffeeId: number) => {
    dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: { coffeeId } });
  };

  const checkoutOrder = (data: any) => {
    dispatch({ type: "CHECKOUT_ORDER", payload: { data } });
  };

  useEffect(() => {
    console.log("cartt", cartState);
    localStorage.setItem("@coffee-delivery:cart", JSON.stringify(cartState));
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        quantity,
        updateQuantity,
        addItemToCart,
        cart,
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
