/* eslint-disable @typescript-eslint/no-explicit-any */
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
} from "./styles";
import Expreso from "../../../../assets/trad-expreso.png";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { useReducer } from "react";

export function CoffeeList() {
  const [coffeeState, dispatch] = useReducer((state: number, action: any) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        if (state > 0) {
          return state - 1;
        }
        return state;
    }
    return state;
  }, 0);

  return (
    <CoffeeContainer>
      <Title>Nossos cafés</Title>

      <CoffeeGroup>
        <Card>
          <Image>
            <img src={Expreso} alt="Expresso Tradicional" />
          </Image>
          <Tag>TRADICIONAL</Tag>
          <Name>Expresso Tradicional</Name>
          <Description>
            O tradicional café feito com água quente e grãos moídos
          </Description>
          <PriceGroup>
            <Price>
              <Currency>R$</Currency>
              <Value>9,90</Value>
            </Price>
            <ActionsGroup>
              <Counter>
                <CounterButton
                  onClick={() =>
                    dispatch({ type: "DECREMENT", payload: coffeeState })
                  }
                >
                  <Minus size={14} />
                </CounterButton>
                <span>{coffeeState}</span>
                <CounterButton
                  onClick={() =>
                    dispatch({ type: "INCREMENT", payload: coffeeState })
                  }
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
      </CoffeeGroup>
    </CoffeeContainer>
  );
}
