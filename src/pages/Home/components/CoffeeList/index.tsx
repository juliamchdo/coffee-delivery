import { Container, CoffeeGroup, Title } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CoffeeOptions, Coffee } from "../../../../services/coffee";
import { CartContext } from "../../../../context/CartContext";
import { CoffeeCard } from "../CoffeeCard";
type CoffeeWithQuantity = Coffee & { quantity: number };

export function CoffeeList() {
  const [coffeeList, SetCoffeeList] = useState<CoffeeWithQuantity[]>([]);
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeWithQuantity[]>(
    []
  );
  const { updateQuantity } = useContext(CartContext);

  useEffect(() => {
    const initialCoffeeList = CoffeeOptions.map((coffee) => ({
      ...coffee,
      quantity: 0,
    }));
    SetCoffeeList(initialCoffeeList);
  }, []);

  const handleCoffeeQuantity = (
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

  const handleCartItems = (coffee: CoffeeWithQuantity) => {
    updateQuantity(coffeeList.reduce((acc, curr) => acc + curr.quantity, 0));

    setSelectedCoffee((prev) => {
      const exists = prev.some((c) => c.id === coffee.id);
      if (exists) {
        return prev.map((c) => (c.id === coffee.id ? coffee : c));
      }
      return [...prev, coffee];
    });
  };

  useEffect(() => {
    localStorage.setItem(
      "@coffee-delivery:selected-coffee-list",
      JSON.stringify(selectedCoffee)
    );
  }, [selectedCoffee]);

  return (
    <Container>
      <Title>Nossos cafés</Title>

      <CoffeeGroup>
        {coffeeList.length &&
          coffeeList.map((coffee) => {
            return (
              <CoffeeCard
                coffee={coffee}
                increment={() => handleCoffeeQuantity(coffee, 1)}
                decrement={() => handleCoffeeQuantity(coffee, -1)}
                updateCartQuantity={() => handleCartItems(coffee)}
                key={coffee.id}
              />
            );
          })}
      </CoffeeGroup>
    </Container>
  );
}
