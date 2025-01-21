import {
  HomeContainer,
  Info,
  HeroContainer,
  Subtitle,
  Title,
  ItensGroup,
  Item,
  ItemIcon,
  ItemText,
} from "./styles";

import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";

import CoffeeCup from "../../assets/images/coffee-cup.png";
import { CoffeeList } from "./components/CoffeeList";

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <Info>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>

          <ItensGroup>
            <Item>
              <ItemIcon color="orange">
                <ShoppingCart size={20} weight="fill" />
              </ItemIcon>
              <ItemText>Compra simples e segura</ItemText>
            </Item>

            <Item>
              <ItemIcon color="black">
                <Package size={20} weight="fill" />
              </ItemIcon>
              <ItemText>Embalagem mantém o café intacto</ItemText>
            </Item>

            <Item>
              <ItemIcon color="yellow">
                <Timer size={20} weight="fill" />
              </ItemIcon>
              <ItemText>Entrega rápida e rastreada</ItemText>
            </Item>

            <Item>
              <ItemIcon color="purple">
                <Coffee size={20} weight="fill" />
              </ItemIcon>
              <ItemText>O café chega fresquinho até você</ItemText>
            </Item>
          </ItensGroup>
        </Info>

        <img src={CoffeeCup} alt="Coffee Delivery Cup" />
      </HeroContainer>
      <CoffeeList />
    </HomeContainer>
  );
}
