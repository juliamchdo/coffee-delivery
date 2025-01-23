import React, { useState, forwardRef } from "react";
import { Container } from "./styles";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  width?: string;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ optional, width, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    return (
      <Container
        data-state={isFocused ? "focused" : "blurred"}
        style={{ width }}
      >
        <input
          type="text"
          ref={ref} // Passa o ref para o input interno
          {...rest}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {optional && <span>Opcional</span>}
      </Container>
    );
  }
);
