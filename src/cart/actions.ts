import { Coffee } from "./reducer";

export enum ActionType {
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART",
  REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART",
  INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
  FINISH_ORDER = "FINISH_ORDER",
}

export type Actions =
  | { type: ActionType.ADD_ITEM_TO_CART; payload: { item: Coffee } }
  | {
      type:
        | ActionType.REMOVE_ITEM_FROM_CART
        | ActionType.INCREMENT_ITEM_QUANTITY
        | ActionType.DECREMENT_ITEM_QUANTITY
        | ActionType.FINISH_ORDER;
      payload: { item: Coffee };
    };

export function addItemToCartAction(item: Coffee) {
  return {
    type: ActionType.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  };
}

export function removeItemFromCartAction(itemId: number) {
  return {
    type: ActionType.REMOVE_ITEM_FROM_CART,
    payload: {
      itemId,
    },
  };
}

export function incrementQuantityAction(itemId: number) {
  return {
    type: ActionType.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  };
}
export function decrementQuantityAction(itemId: number) {
  return {
    type: ActionType.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  };
}

export function FINISH_ORDER() {
  return {
    type: ActionType.FINISH_ORDER,
  };
}
