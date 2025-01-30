import React, { useState, forwardRef } from "react";
import { Box, Container, ErrorMessage } from "./styles";
import { FieldError } from "react-hook-form";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean;
  width?: string;
  error?: FieldError;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ optional, width, error, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    return (
      <Box style={{ width }}>
        <Container data-state={isFocused ? "focused" : "blurred"}>
          <input
            type="text"
            ref={ref}
            {...rest}
            onBlur={onBlur}
            onFocus={onFocus}
          />
          {optional && <span>Opcional</span>}
        </Container>

        {error?.message && (
          <ErrorMessage role="alert">{error.message}</ErrorMessage>
        )}
      </Box>
    );
  }
);
