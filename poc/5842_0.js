
new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'EUR',
  currencyDisplay: 'code',
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
}).format(0.001)

