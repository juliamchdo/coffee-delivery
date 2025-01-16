import {
  HomeContainer,
  Info,
  Banner,
  Subtitle,
  Title,
  ItensGroup,
  Item,
  ItemIcon,
  ItemText,
} from "./styles";

import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";

import CoffeeCup from "../../assets/coffee-cup.png";

export function Home() {
  return (
    <HomeContainer>
      <Banner>
        <Info>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>

          <ItensGroup>
            <Item>
              <ItemIcon itemColor="orange">
                <ShoppingCart size={20} weight="fill" />
              </ItemIcon>
              <ItemText>Compra simples e segura</ItemText>
            </Item>

            <Item>
              <ItemIcon itemColor="black">
                <Package size={20} weight="fill" />
              </ItemIcon>
              <ItemText>Embalagem mantém o café intacto</ItemText>
            </Item>

            <Item>
              <ItemIcon itemColor="yellow">
                <Timer size={20} weight="fill" />
              </ItemIcon>
              <ItemText>Entrega rápida e rastreada</ItemText>
            </Item>

            <Item>
              <ItemIcon itemColor="purple">
                <Coffee size={20} weight="fill" />
              </ItemIcon>
              <ItemText>O café chega fresquinho até você</ItemText>
            </Item>
          </ItensGroup>
        </Info>

        <img src={CoffeeCup} alt="Coffee Delivery Cup" />
      </Banner>
    </HomeContainer>
  );
}
