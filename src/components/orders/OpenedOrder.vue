<template lang="pug">
  .box
    table
      thead
        tr
          th Код
          th Наименование
          th Бренд
          th Цена
          th Кол-во
          th Сумма
      tbody
        tr(
          v-for="(item, key) in order.items"
          :key="key"
        )
          td {{item.good.code}}
          td {{item.good.description}}
          td {{item.good.brand}}
          td {{moneyFmt(item.price)}}
          td {{item.qty}}
          td {{moneyFmt(item.price * item.qty)}}
      tfoot
        tr
          th(colspan="5") Итого:
            th {{moneyFmt(0.0)}}
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
    
</style>