import { Minus, Plus } from "@phosphor-icons/react";
import { Container, Button } from "./styles";

interface CounterButtonProps {
  quantity: number;
  increment: VoidFunction;
  decrement: VoidFunction;
}

export function QuantityInput({
  quantity,
  increment,
  decrement,
}: CounterButtonProps) {
  return (
    <Container>
      <Button onClick={decrement}>
        <Minus size={14} />
      </Button>
      <span>{quantity}</span>
      <Button onClick={increment}>
        <Plus size={14} />
      </Button>
    </Container>
  );
}
