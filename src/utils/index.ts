const FORMATTER = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP'
});

export function formatCurrency(value: number) {
  return FORMATTER.format(value);
}
