import { createContext, useState } from "react";

interface CartContextData {
  quantity: number;
  updateQuantity: (quantity: number) => void;
}

interface CartContextProps {
  children: React.ReactNode;
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProps) {
  const [quantity, setQuantity] = useState(0);
  const updateQuantity = (quantity: number) => {
    setQuantity(quantity);
  };
  return (
    <CartContext.Provider value={{ quantity, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
