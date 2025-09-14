import { Coffee } from "@phosphor-icons/react";

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

export function cartReducer(state: CartState, action: any) {
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
      console.log("action", action);
      return { cart: [], order: action.payload.data };
    }

    default:
      return state;
  }
}
