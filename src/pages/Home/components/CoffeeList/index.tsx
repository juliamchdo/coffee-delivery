import { Container, CoffeeGroup, Title } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CoffeeOptions } from "../../../../services/coffee";
import { CartContext } from "../../../../context/CartContext";
import { CoffeeCard } from "../CoffeeCard";
import { Coffee } from "../../../../cart/reducer";

export function CoffeeList() {
  const [coffeeList, SetCoffeeList] = useState<Coffee[]>([]);
  const { updateQuantity, addItemToCart, cart } = useContext(CartContext);

  const handleCoffeeQuantity = (selectedCoffee: Coffee, amount: number) => {
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

  const handleCartItems = (coffee: Coffee) => {
    addItemToCart(coffee);
  };

  useEffect(() => {
    updateQuantity(cart.reduce((acc, curr) => acc + curr.quantity, 0));
  }, [cart]);

  useEffect(() => {
    const initialCoffeeList = CoffeeOptions.map((coffee) => ({
      ...coffee,
      quantity: 0,
    }));
    SetCoffeeList(initialCoffeeList);
  }, []);

  return (
    <Container>
      <Title>
        <h2>Nossos cafés</h2>
      </Title>

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
