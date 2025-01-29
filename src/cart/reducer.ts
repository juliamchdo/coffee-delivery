import { Coffee } from "@phosphor-icons/react";
import { Actions, ActionType } from "./actions";

export enum CoffeeType {
  TRADICIONAL = "TRADICIONAL",
  GELADO = "GELADO",
  COM_LEITE = "COM LEITE",
  ALCOOLICO = "ALCOÓLICO",
  ESPECIAL = "ESPECIAL",
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
  order: [];
}

// export function cartReducer(state: any, action: Actions) {
//   console.log("state", state);
//   console.log("action", action);
//   switch (action.type) {
//     case ActionType.ADD_ITEM_TO_CART:
//       return {
//         ...state,
//         cart: state.items.some((item) => item.id === action.payload.item.id)
//           ? state.items.map((item) =>
//               item.id === action.payload.item.id
//                 ? {
//                     ...item,
//                     quantity: item.quantity + action.payload.item.quantity,
//                   }
//                 : item
//             )
//           : [...state.items, action.payload.item],
//       };
//   }
// }
