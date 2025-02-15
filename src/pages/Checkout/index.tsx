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
import { useContext, useEffect, useState } from "react";
import { QuantityInput } from "../../components/QuantityInput";
import { TextInput } from "../../components/TextInput";
import { RadioButton } from "../../components/RadioButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ConfirmButton } from "../../components/ConfirmButton";
import { FormatCurrency } from "../../utils/format-currency";
import { Coffee } from "../../cart/reducer";
import { CartContext } from "../../context/CartContext";

const CheckoutFormValidationSchema = z.object({
  cep: z.string().min(8, "O CEP é obrigatório e deve conter 8 dígitos").max(8),
  street: z.string().min(5, "Informe um endereço válido").max(100),
  number: z.string().min(1, "Informe o número do endereço"),
  complement: z.string(),
  neighborhood: z.string().min(3, "Informe o bairro corretamenete").max(50),
  city: z.string().min(3, "Informe a cidade corretamente").max(50),
  state: z.string().min(2, "Informe o estado corretamente").max(2),
});

type CheckoutFormData = Zod.infer<typeof CheckoutFormValidationSchema>;

export const Checkout = () => {
  const DELIVERY_FEE = 3.5;

  const { cart, incrementItem, decrementItem, removetItem, checkoutOrder } =
    useContext(CartContext);

  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(CheckoutFormValidationSchema),
  });

  const [selectedPaymentOption, setSelectedPaymentOption] = useState("");

  const getTotalCoffeePrice = (coffee: Coffee) => {
    return (coffee.quantity * coffee.price).toFixed(2).replace(".", ",");
  };

  const increment = (coffeeId: number) => {
    incrementItem(coffeeId);
  };

  const decrement = (coffeeId: number) => {
    decrementItem(coffeeId);
  };

  const removeItemFromCart = (coffeeId: number) => {
    removetItem(coffeeId);
  };

  const handleCheckoutOrder = (data: CheckoutFormData) => {
    if (selectedPaymentOption) {
      const formData = { ...data, selectedPaymentOption };
      checkoutOrder(formData);
    }
  };

  useEffect(() => {
    const totalItems = cart.reduce((total, coffee) => {
      return total + coffee.price * coffee.quantity;
    }, 0);

    setTotalItemsPrice(totalItems);
    setTotalOrderPrice(totalItems + DELIVERY_FEE);
  }, [cart]);

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

          <AddressForm
            id="checkout"
            onSubmit={handleSubmit(handleCheckoutOrder)}
          >
            <TextInput
              type="number"
              placeholder="CEP"
              width="40%"
              error={errors.cep}
              {...register("cep")}
            />

            <TextInput
              placeholder="Rua"
              width="100%"
              error={errors.street}
              {...register("street")}
            />

            <FormGroup>
              <TextInput
                type="number"
                placeholder="Número"
                width="40%"
                error={errors.number}
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
                error={errors.neighborhood}
                {...register("neighborhood")}
              />

              <TextInput
                placeholder="Cidade"
                width="54%"
                error={errors.city}
                {...register("city")}
              />

              <TextInput
                placeholder="UF"
                width="10%"
                error={errors.state}
                {...register("state")}
              />
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
          {/* {!selectedPaymentOption && (
            <ErrorMessage>Informe um método de pagamento</ErrorMessage>
          )} */}
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
          {cart &&
            cart.map((coffee) => {
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
                          increment={() => increment(coffee.id)}
                          decrement={() => decrement(coffee.id)}
                        />
                        <RemoveButton
                          onClick={() => removeItemFromCart(coffee.id)}
                        >
                          <Trash size={22} />
                          REMOVER
                        </RemoveButton>
                      </ButtonsGroup>
                    </div>
                  </CartInfo>
                  <span>R$ {getTotalCoffeePrice(coffee)}</span>
                </CartItem>
              );
            })}

          <CartTotal>
            <div>
              <p>Total de itens</p>
              <CartTotalPrice>{FormatCurrency(totalItemsPrice)}</CartTotalPrice>
            </div>

            <div>
              <p>Entrega</p>
              <CartTotalPrice>{FormatCurrency(DELIVERY_FEE)}</CartTotalPrice>
            </div>

            <div>
              <p>Total</p>
              <span>{FormatCurrency(totalOrderPrice)}</span>
            </div>
            <ConfirmButton
              type="submit"
              form="checkout"
              text="CONFIRMAR PEDIDO"
            />
          </CartTotal>
        </Cart>
      </CartContainer>
    </Container>
  );
};
