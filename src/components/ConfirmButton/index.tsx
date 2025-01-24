import React from "react";
import { Button } from "./styles";

interface ConfirmButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function ConfirmButton({ text, ...rest }: ConfirmButtonProps) {
  return <Button {...rest}>{text}</Button>;
}
