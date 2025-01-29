import { ShoppingCart } from "@phosphor-icons/react";
import { QuantityInput } from "../../../../components/QuantityInput";
import {
  ActionsGroup,
  Cart,
  Container,
  Currency,
  Description,
  Image,
  Name,
  Price,
  PriceGroup,
  Tag,
  TagGroup,
  Value,
} from "./styles";
import { Coffee, CoffeeType } from "../../../../cart/reducer";

interface CoffeeCardProps {
  coffee: Coffee;
  increment: () => void;
  decrement: () => void;
  updateCartQuantity: () => void;
}

export function CoffeeCard({
  coffee,
  increment,
  decrement,
  updateCartQuantity,
}: CoffeeCardProps) {
  const DEFAULT_PRICE = 9.9;

  const getCoffeePrice = () => {
    return !coffee.quantity
      ? DEFAULT_PRICE.toFixed(2).replace(".", ",")
      : (coffee.quantity * coffee.price).toFixed(2).replace(".", ",");
  };
  return (
    <Container>
      <Image>
        <img
          src={`/src/assets/images/${coffee.image}.png`}
          alt="Expresso Tradicional"
        />
      </Image>
      <TagGroup>
        {coffee.type.map((type: CoffeeType) => {
          return <Tag key={type + coffee.id}>{type}</Tag>;
        })}
      </TagGroup>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <PriceGroup>
        <Price>
          <Currency>R$</Currency>
          <Value>{getCoffeePrice()}</Value>
        </Price>
        <ActionsGroup>
          <QuantityInput
            quantity={coffee.quantity}
            increment={increment}
            decrement={decrement}
          />
          <Cart onClick={updateCartQuantity} disabled={!coffee.quantity}>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </ActionsGroup>
      </PriceGroup>
    </Container>
  );
}
