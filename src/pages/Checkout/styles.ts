import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export const CheckoutContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 4.5rem;
`;

export const OrderForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;

  width: 100%;
`;

export const OrderSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 0.375rem 2.75rem;
  padding: 2.5rem;
`;

export const Title = styled.h2`
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${(props) => props.theme["base-subtitle"]};
  margin: 1.25rem 0 0.5rem 0;
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

export const FormTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1rem;
    line-height: 1.3;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    line-height: 1.3;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.75rem;
  width: 100%;
`;

export const Input = styled.input`
  background: ${(props) => props.theme["base-input"]};
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;
  padding: 0.75rem;
  width: ${(props) => props.width}%;
`;

export const PaymentCard = styled.div`
  background: ${(props) =>
    props.theme[props.color] || props.theme["base-button"]};

  border: 1px solid ${(props) => props.theme[props.border] || "transparent"};
  border-radius: 6px;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 0.75rem;
    line-height: 1.6;
    cursor: pointer;
  }
`;

export const OrderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;
