module.exports = {
  money: new Intl.NumberFormat('ru-RU', {
    style:'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  }).format
}