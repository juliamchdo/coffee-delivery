import {
  ActionsGroup,
  Card,
  Cart,
  CoffeeContainer,
  CoffeeGroup,
  Counter,
  CounterButton,
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
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { CoffeeOptions, Coffee } from "../../../../mocks/coffe-mock";
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

  const updateCoffeeQuantity = (name: string, amount: number) => {
    SetCoffeeList((prev) =>
      prev.map((coffee) =>
        coffee.name == name
          ? {
              ...coffee,
              quantity: Math.max(coffee?.quantity + amount, 0),
            }
          : coffee
      )
    );
  };

  return (
    <CoffeeContainer>
      <Title>Nossos cafés</Title>

      <CoffeeGroup>
        {coffeeList.length &&
          coffeeList.map((coffee) => {
            return (
              <Card key={coffee.name}>
                <Image>
                  <img
                    src={`/src/assets/images/${coffee.image}.png`}
                    alt="Expresso Tradicional"
                  />
                </Image>
                <TagGroup>
                  {coffee.type.map((type) => {
                    return <Tag key={type + coffee.name}>{type}</Tag>;
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
                    <Counter>
                      <CounterButton
                        onClick={() => updateCoffeeQuantity(coffee.name, -1)}
                      >
                        <Minus size={14} />
                      </CounterButton>
                      <span>{coffee.quantity}</span>
                      <CounterButton
                        onClick={() => updateCoffeeQuantity(coffee.name, 1)}
                      >
                        <Plus size={14} />
                      </CounterButton>
                    </Counter>
                    <Cart>
                      <ShoppingCart size={22} weight="fill" />
                    </Cart>
                  </ActionsGroup>
                </PriceGroup>
              </Card>
            );
          })}
      </CoffeeGroup>
    </CoffeeContainer>
  );
}
