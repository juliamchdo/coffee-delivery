import { forwardRef } from "react";
import { Container } from "./styles";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isSelected?: boolean;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ isSelected, children, ...rest }) => {
    return (
      <Container data-state={isSelected} {...rest}>
        {children}
      </Container>
    );
  }
);
