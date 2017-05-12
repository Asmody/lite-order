
module.exports = {
  money: new Intl.NumberFormat('ru-RU', {
    style:'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  }).format,
  date: (dt) => new Intl.DateTimeFormat('ru-RU').format(new Date(dt)),
  dateFromString: (dateStr) => new Date(dateStr.replace(/(\d{2})\.(\d{2})\.(\d{4})/, "$3-$2-$1")),
}