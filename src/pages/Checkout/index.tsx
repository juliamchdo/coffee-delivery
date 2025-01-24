import {
  Container,
  FormGroup,
  AddressContainer,
  AddressHeader,
  AddressForm,
  PaymentContainer,
  PaymentHeader,
  PaymentOptions,
  CartContainer,
  CartItem,
  CartInfo,
  Address,
  Cart,
  RemoveButton,
  ButtonsGroup,
  CartTotal,
  CartTotalPrice,
} from "./styles";

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { QuantityInput } from "../../components/QuantityInput";
import { Coffee } from "../../services/coffee";
import { TextInput } from "../../components/TextInput";
import { RadioButton } from "../../components/RadioButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ConfirmButton } from "../../components/ConfirmButton";

type CoffeeWithQuantity = Coffee & { quantity: number };

const CheckoutFormValidationSchema = z.object({
  cep: z.string().min(2).max(50),
  street: z.string().min(5).max(100),
  number: z.string().min(1),
  complement: z.string(),
  neighborhood: z.string().min(3).max(50),
  city: z.string().min(3).max(50),
  state: z.string().min(2).max(2),
});

export const Checkout = () => {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(CheckoutFormValidationSchema),
  });

  const [selectedCoffeeList, setSelectedCoffeeList] = useState<
    CoffeeWithQuantity[]
  >([]);

  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");

  useEffect(() => {
    const coffeeList = localStorage.getItem(
      "@coffee-delivery:selected-coffee-list"
    );
    if (coffeeList) {
      setSelectedCoffeeList(JSON.parse(coffeeList));
    }
  }, []);

  const getTotalItemPrice = (coffee: CoffeeWithQuantity) => {
    return (coffee.quantity * coffee.price).toFixed(2).replace(".", ",");
  };

  return (
    <Container>
      <AddressContainer>
        <h2>Complete seu pedido</h2>

        <Address>
          <AddressHeader>
            <MapPinLine size={24} />

            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressHeader>

          <AddressForm>
            <TextInput
              type="number"
              placeholder="CEP"
              width="40%"
              {...register("cep")}
            />
            <TextInput placeholder="Rua" width="100%" {...register("street")} />

            <FormGroup>
              <TextInput
                type="number"
                placeholder="Número"
                width="40%"
                {...register("number")}
              />
              <TextInput
                placeholder="Complemento"
                optional
                width="60%"
                {...register("complement")}
              />
            </FormGroup>

            <FormGroup>
              <TextInput
                placeholder="Bairro"
                width="44%"
                {...register("neighborhood")}
              />
              <TextInput
                placeholder="Cidade"
                width="54%"
                {...register("city")}
              />
              <TextInput placeholder="UF" width="10%" {...register("state")} />
            </FormGroup>
          </AddressForm>
        </Address>

        <PaymentContainer>
          <PaymentHeader>
            <CurrencyDollar size={24} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentHeader>
          <PaymentOptions>
            <RadioButton
              isSelected={selectedPaymentOption === "credit"}
              onClick={() => setSelectedPaymentOption("credit")}
            >
              <CreditCard size={24} />
              <span>Cartão de Crédito</span>
            </RadioButton>
            <RadioButton
              isSelected={selectedPaymentOption === "debit"}
              onClick={() => setSelectedPaymentOption("debit")}
            >
              <Bank size={24} />
              <span>Cartão de Débito</span>
            </RadioButton>
            <RadioButton
              isSelected={selectedPaymentOption === "cash"}
              onClick={() => setSelectedPaymentOption("cash")}
            >
              <Money size={24} />
              <span>Dinheiro</span>
            </RadioButton>
          </PaymentOptions>
        </PaymentContainer>
      </AddressContainer>

      <CartContainer>
        <h2>Cafés selecionados</h2>

        <Cart>
          {selectedCoffeeList &&
            selectedCoffeeList.map((coffee) => {
              return (
                <CartItem key={coffee.id}>
                  <CartInfo>
                    <img
                      src={`src/assets/images/${coffee.image}.png`}
                      alt={coffee.name}
                    />

                    <div>
                      <span>{coffee.name}</span>
                      <ButtonsGroup>
                        <QuantityInput
                          quantity={coffee.quantity}
                          increment={() => {}}
                          decrement={() => {}}
                        />
                        <RemoveButton>
                          <Trash size={22} />
                          REMOVER
                        </RemoveButton>
                      </ButtonsGroup>
                    </div>
                  </CartInfo>
                  <span>R$ {getTotalItemPrice(coffee)}</span>
                </CartItem>
              );
            })}

          <CartTotal>
            <div>
              <p>Total de itens</p>
              <CartTotalPrice>R$ 29,70</CartTotalPrice>
            </div>

            <div>
              <p>Entrega</p>
              <CartTotalPrice>R$ 3,50</CartTotalPrice>
            </div>

            <div>
              <p>Total</p>
              <span>R$33,20</span>
            </div>
            <ConfirmButton
              onClick={() => console.log("oi")}
              text="CONFIRMAR PEDIDO"
            />
          </CartTotal>
        </Cart>
      </CartContainer>
    </Container>
  );
};
