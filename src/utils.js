module.exports = {
  money: new Intl.NumberFormat('ru-RU', {
    style:'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  }).format,
  date (dt) { return new Intl.DateTimeFormat('ru-RU').format(new Date(dt)) }
}