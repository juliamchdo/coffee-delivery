export function FormatCurrency(value: number): string {
  return `R$ ${value.toFixed(2).replace(".", ",")}`;
}
