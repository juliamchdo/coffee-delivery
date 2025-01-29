import { createContext, useEffect, useReducer, useState } from "react";
import { Coffee } from "../cart/reducer";
interface CartContextData {
  cart: Coffee[];
  quantity: number;
  updateQuantity: (quantity: number) => void;
  addItemToCart: (coffee: Coffee) => void;
  incrementItem: (coffeeId: number) => void;
  decrementItem: (coffeeId: number) => void;
  removetItem: (coffeeId: number) => void;
}

interface CartContextProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cartState, dispatch] = useReducer(
    (state: Coffee[], action: any) => {
      if (action.type === "ADD_ITEM_TO_CART") {
        const isAlreadyAdded = state.some(
          (item) => item.id === action.payload.coffee.id
        );

        if (isAlreadyAdded) {
          return state.map((c) =>
            c.id === action.payload.coffee.id ? action.payload.coffee : c
          );
        }

        return [...state, action.payload.coffee];
      }

      if (action.type === "INCREMENT_ITEM") {
        return state.map((c) =>
          c.id === action.payload.coffeeId
            ? { ...c, quantity: c.quantity + 1 }
            : c
        );
      }

      if (action.type === "DECREMENT_ITEM") {
        return state.map((c) =>
          c.id === action.payload.coffeeId && c.quantity > 1
            ? { ...c, quantity: c.quantity - 1 }
            : c
        );
      }

      if (action.type === "REMOVE_ITEM_FROM_CART") {
        return state.filter((c) => c.id !== action.payload.coffeeId);
      }

      return state;
    },
    [],
    () => {
      return JSON.parse(
        localStorage.getItem("@coffee-delivery:cart") || "[]"
      ) as Coffee[];
    }
  );

  const [quantity, setQuantity] = useState(0);
  const cart = cartState;

  const updateQuantity = (quantity: number) => {
    setQuantity(quantity);
  };

  const addItemToCart = (coffee: Coffee) => {
    dispatch({ type: "ADD_ITEM_TO_CART", payload: { coffee } });
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
        incrementItem,
        decrementItem,
        removetItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
