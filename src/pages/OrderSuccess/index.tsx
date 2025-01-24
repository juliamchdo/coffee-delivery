import { MapPin, Money, Timer } from "@phosphor-icons/react";
import {
  Container,
  InfoContent,
  SuccessContainer,
  SuccessHeader,
  SuccessInfo,
} from "./styles";
import { useTheme } from "styled-components";

import CartImage from "../../assets/checkout-cart.svg";

export function OrderSuccess() {
  const theme = useTheme();
  return (
    <Container>
      <SuccessContainer>
        <SuccessHeader>
          <h2>Uhu! Pedido confirmado</h2>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </SuccessHeader>

        <SuccessInfo>
          <InfoContent>
            <div>
              <MapPin size={20} style={{ background: theme.purple }} />
              <div>
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
                </span>
                <span> Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div>
              <Timer size={20} style={{ background: theme.yellow }} />
              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <Money size={20} style={{ background: theme["yellow-dark"] }} />
              <div>
                <span>Pagamento na entrega</span>
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </InfoContent>
        </SuccessInfo>
      </SuccessContainer>
      <img src={CartImage} alt="" />
    </Container>
  );
}
