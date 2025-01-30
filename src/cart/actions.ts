import { Coffee, OrderData } from "./reducer";

export enum ActionType {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  INCREMENT_ITEM = "INCREMENT_ITEM",
  DECREMENT_ITEM = "DECREMENT_ITEM",
  CHECKOUT_ORDER = "CHECKOUT_ORDER",
}

export type Actions =
  | { type: "ADD_ITEM_TO_CART"; payload: Coffee }
  | { type: "INCREMENT_ITEM"; payload: { id: number } }
  | { type: "DECREMENT_ITEM"; payload: { id: number } }
  | { type: "REMOVE_ITEM_FROM_CART"; payload: { id: number } }
  | { type: "CHECKOUT_ORDER"; payload: OrderData };

export function addItemToCartAction(coffee: Coffee) {
  return {
    type: ActionType.ADD_ITEM_TO_CART,
    payload: { coffee },
  };
}

export function removeItemFromCartAction(coffeeId: number) {
  return {
    type: ActionType.REMOVE_ITEM_FROM_CART,
    payload: {
      coffeeId,
    },
  };
}

export function incrementQuantityAction(coffeeId: number) {
  return {
    type: ActionType.INCREMENT_ITEM,
    payload: {
      coffeeId,
    },
  };
}
export function decrementQuantityAction(coffeeId: number) {
  return {
    type: ActionType.DECREMENT_ITEM,
    payload: {
      coffeeId,
    },
  };
}

export function checkoutOrderAction(data: OrderData) {
  return {
    type: ActionType.CHECKOUT_ORDER,
    payload: {
      data,
    },
  };
}
