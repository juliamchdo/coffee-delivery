import { Container, CoffeeGroup, Title } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CoffeeOptions, Coffee } from "../../../../services/coffee";
import { CartContext } from "../../../../context/CartContext";
import { CoffeeCard } from "../CoffeeCard";
type CoffeeWithQuantity = Coffee & { quantity: number };

export function CoffeeList() {
  const [coffeeList, SetCoffeeList] = useState<CoffeeWithQuantity[]>([]);
  const { updateQuantity } = useContext(CartContext);

  useEffect(() => {
    const initialCoffeeList = CoffeeOptions.map((coffee) => ({
      ...coffee,
      quantity: 0,
    }));
    SetCoffeeList(initialCoffeeList);
  }, []);

  const updateCoffeeQuantity = (
    selectedCoffee: CoffeeWithQuantity,
    amount: number
  ) => {
    SetCoffeeList((prev) =>
      prev.map((coffee) =>
        coffee.id == selectedCoffee.id
          ? {
              ...coffee,
              quantity: Math.max(coffee?.quantity + amount, 0),
            }
          : coffee
      )
    );
  };

  const updateCartQuantity = () => {
    updateQuantity(coffeeList.reduce((acc, curr) => acc + curr.quantity, 0));
  };

  return (
    <Container>
      <Title>Nossos cafés</Title>

      <CoffeeGroup>
        {coffeeList.length &&
          coffeeList.map((coffee) => {
            return (
              <CoffeeCard
                coffee={coffee}
                increment={() => updateCoffeeQuantity(coffee, 1)}
                decrement={() => updateCoffeeQuantity(coffee, -1)}
                updateCartQuantity={updateCartQuantity}
                key={coffee.id}
              />
            );
          })}
      </CoffeeGroup>
    </Container>
  );
}
