<template lang="pug">
  .box
    table.opened-order
      thead
        tr
          th.col-code Код
          th.col-brand Бренд
          th.col-desc Наименование
          th.col-price Цена
          th.col-qty Кол-во
          th.col-sum Сумма
      tbody
        tr(
          v-for="(item, key) in order.items"
          :key="key"
        )
          td.col-code {{item.good.code}}
          td.col-brand {{item.good.brand}}
          td.col-desc {{item.good.description}}
          td.col-price {{moneyFmt(item.price)}}
          td.col-qty {{item.qty}}
          td.col-sum {{moneyFmt(item.price * item.qty)}}
      tfoot
        tr
          th(colspan="5") Итого:
            th {{moneyFmt(order.total)}}
</template>

<script>

export default {
    name: 'opened-order',
    props: [
        'order'
    ],
    methods: {
      moneyFmt: utils.money,
    }
}
</script>

<style lang="sass">
.opened-order
  table-layout: fixed
  .col-code
    width: 10%
  .col-desc
  .col-brand
    width: 10%
    overflow: hidden
  .col-price
    width: 10%
  .col-qty
    width: 10%
  .col-sum
    width: 10%
  td.col-price,td.col-sum,td.col-qty
    text-align: right
</style>