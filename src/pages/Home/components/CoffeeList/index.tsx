import {
  ActionsGroup,
  Card,
  Cart,
  Container,
  CoffeeGroup,
  Currency,
  Description,
  Image,
  Name,
  Price,
  PriceGroup,
  Tag,
  Title,
  Value,
  TagGroup,
} from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { CoffeeOptions, Coffee } from "../../../../services/coffee";
import { QuantityInput } from "../../../../components/QuantityInput";
type CoffeeWithQuantity = Coffee & { quantity: number };

export function CoffeeList() {
  const [coffeeList, SetCoffeeList] = useState<CoffeeWithQuantity[]>([]);

  useEffect(() => {
    const initialCoffeeList = CoffeeOptions.map((coffee) => ({
      ...coffee,
      quantity: 1,
    }));
    SetCoffeeList(initialCoffeeList);
  }, []);

  const updateCoffeeQuantity = (id: number, amount: number) => {
    SetCoffeeList((prev) =>
      prev.map((coffee) =>
        coffee.id == id
          ? {
              ...coffee,
              quantity: Math.max(coffee?.quantity + amount, 0),
            }
          : coffee
      )
    );
  };

  return (
    <Container>
      <Title>Nossos cafés</Title>

      <CoffeeGroup>
        {coffeeList.length &&
          coffeeList.map((coffee) => {
            return (
              <Card key={coffee.id}>
                <Image>
                  <img
                    src={`/src/assets/images/${coffee.image}.png`}
                    alt="Expresso Tradicional"
                  />
                </Image>
                <TagGroup>
                  {coffee.type.map((type) => {
                    return <Tag key={type + coffee.id}>{type}</Tag>;
                  })}
                </TagGroup>
                <Name>{coffee.name}</Name>
                <Description>{coffee.description}</Description>
                <PriceGroup>
                  <Price>
                    <Currency>R$</Currency>
                    <Value>
                      {(coffee.quantity * coffee.price)
                        .toFixed(2)
                        .replace(".", ",")}
                    </Value>
                  </Price>
                  <ActionsGroup>
                    <QuantityInput
                      quantity={coffee.quantity}
                      increment={() => updateCoffeeQuantity(coffee.id, 1)}
                      decrement={() => updateCoffeeQuantity(coffee.id, -1)}
                    />
                    <Cart>
                      <ShoppingCart size={22} weight="fill" />
                    </Cart>
                  </ActionsGroup>
                </PriceGroup>
              </Card>
            );
          })}
      </CoffeeGroup>
    </Container>
  );
}
