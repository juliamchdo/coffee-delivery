import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  margin-top: 4.5rem;
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.938rem;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme["base-subtitle"]};
    margin: 1.25rem 0 0.5rem 0;
  }
`;

export const AddressContainer = styled(CheckoutContainer)`
  width: 55%;
`;

export const CartContainer = styled(CheckoutContainer)`
  width: 45%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;
  width: 100%;
`;

export const Address = styled(Card)``;

export const AddressHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    span {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1rem;
      line-height: 1.3;
    }

    p {
      color: ${(props) => props.theme["base-text"]};
      font-size: 0.875rem;
      line-height: 1.3;
    }
  }
`;

export const AddressForm = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;
  width: 100%;
`;

export const FormCard = styled.div`
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  width: 100%;
`;

export const PaymentContainer = styled(Card)``;

export const PaymentHeader = styled(AddressHeader)`
  svg {
    color: ${(props) => props.theme["purple"]};
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;
  width: 100%;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`;

export const Cart = styled(Card)`
  border-radius: 6px 44px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
  width: 100%;

  &:not(:first-child) {
    padding: 1.5rem 0;
  }

  > span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  span {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
    line-height: 1.3;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%;
  }

  img {
    width: 64px;
    height: 64px;
  }
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  margin-top: 1.5rem;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
    }
    &:last-child {
      span,
      p {
        font-size: 1.25rem;
        font-weight: bold;
        color: ${(props) => props.theme["base-subtitle"]};
      }
    }
  }
`;

export const CartTotalPrice = styled.span`
  color: ${(props) => props.theme["base-text"]};
  font-size: 1rem;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  border-radius: 6px;
  border: none;
  font-size: 0.75rem;
  text-transform: uppercase;
  transition: background 0.2s;

  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
