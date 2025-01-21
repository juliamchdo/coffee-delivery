import {
  FormCard,
  CheckoutContainer,
  Title,
  FormTitle,
  OrderForm,
  Input,
  FormGroup,
  PaymentCard,
  OrderSummary,
  OrderItems,
} from "./styles";

import coffee from "../../assets/images/american-expresso.png";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderForm>
        <Title>Complete seu pedido</Title>
        <FormCard>
          <FormTitle>
            <MapPinLine size={22} color="#C47F17" />

            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormTitle>

          <Input placeholder="CEP" type="text" width={40} />
          <Input placeholder="Rua" type="text" width={100} />

          <FormGroup>
            <Input placeholder="Número" type="text" width={40} />
            <Input placeholder="Complemento" type="text" width={60} />
          </FormGroup>

          <FormGroup>
            <Input placeholder="Bairro" type="text" width={44} />
            <Input placeholder="Cidade" type="text" width={54} />
            <Input placeholder="UF" type="text" width={10} />
          </FormGroup>
        </FormCard>

        <FormCard>
          <FormTitle>
            <CurrencyDollar size={22} color="#8047F8" />

            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </FormTitle>
          <FormGroup>
            <PaymentCard>
              <CreditCard size={22} color="#8047F8" />
              <p>CARTÃO DE CRÉDITO</p>
            </PaymentCard>

            <PaymentCard>
              <Bank size={22} color="#8047F8" />
              <p>CARTÃO DE DÉBITO</p>
            </PaymentCard>
            <PaymentCard>
              <Money size={22} color="#8047F8" />
              <p>DINHEIRO</p>
            </PaymentCard>
          </FormGroup>
        </FormCard>
      </OrderForm>

      <OrderSummary>
        <OrderItems>
          <img src={coffee} alt="" />
          <div>
            <p>Expresso tradicional</p>
          </div>
        </OrderItems>
      </OrderSummary>
    </CheckoutContainer>
  );
}
