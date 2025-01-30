import { Coffee } from "@phosphor-icons/react";
import { Actions } from "./actions";

export enum CoffeeType {
  TRADICIONAL = "TRADICIONAL",
  GELADO = "GELADO",
  COM_LEITE = "COM LEITE",
  ALCOOLICO = "ALCOÓLICO",
  ESPECIAL = "ESPECIAL",
}

export interface OrderData {
  cep: string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  selectedPaymentOption: string;
}

export interface Coffee {
  type: CoffeeType[];
  name: string;
  description: string;
  price: number;
  image: string;
  id: number;
  quantity: number;
}

export interface CartState {
  cart: Coffee[];
  order: OrderData;
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      const isAlreadyAdded = state.cart.some(
        (item) => item.id === action.payload.id
      );

      const updatedCart = isAlreadyAdded
        ? state.cart.map((c) =>
            c.id === action.payload.id ? action.payload : c
          )
        : [...state.cart, action.payload];

      return { ...state, cart: updatedCart };
    }

    case "INCREMENT_ITEM": {
      const updatedCart = state.cart.map((c) =>
        c.id === action.payload.id ? { ...c, quantity: c.quantity + 1 } : c
      );
      return { ...state, cart: updatedCart };
    }

    case "DECREMENT_ITEM": {
      const updatedCart = state.cart.map((c) =>
        c.id === action.payload.id && c.quantity > 1
          ? { ...c, quantity: c.quantity - 1 }
          : c
      );
      return { ...state, cart: updatedCart };
    }

    case "REMOVE_ITEM_FROM_CART": {
      const updatedCart = state.cart.filter((c) => c.id !== action.payload.id);
      return { ...state, cart: updatedCart };
    }

    case "CHECKOUT_ORDER": {
      return { cart: [], order: action.payload };
    }

    default:
      return state;
  }
}
