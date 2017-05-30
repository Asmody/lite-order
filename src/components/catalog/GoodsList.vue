<template lang="pug">
  scroll-table(t-class="table is-striped goods-list")
    .level(slot="tcaption")
      .level-left
        .level-item
          quick-search
    thead(slot="thead")
      tr
        th.col-code Код
        th.col-brand Бренд
        th.col-descr Наименование
        th.col-price Цена
        th.col-qty Кол-во
    tbody
      tr(
        v-for="(good,idx) in goods"
        :key="good.id"
        :class="{'in-order':good.qty>0}"
      )
        td.col-code {{good.code}}
        td.col-brand {{good.brand}}
        td.col-descr {{good.description.substr(0, 135)}}
        td.col-price {{money(good.price)}}
        td.col-qty 
          input.input.is-small.good-qty(
            type="number"
            min="0"
            maxlength="10"
            v-model.number="good.qty"
            @input="(e)=>{updateQty(good, e)}"
          )
    .level(slot="tfooter")
      .level-item
        goods-pagination

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ScrollTable from '@/components/common/ScrollTable'
import QuickSearch from './QuickSearch'
import GoodsPagination from './GoodsPagination'

export default {
  name: 'goods-list',
  data () {
    return {
      
    }
  },
  components: {
    ScrollTable,
    QuickSearch,
    GoodsPagination
  },
  computed: {
    ...mapGetters({
      goods: 'goodsList'
    })
  },
  beforeMount () {
    this.loadGoodsList()
  },
  methods: {
    money: utils.money,
    updateQty (good, e) {
      let val = e.target.valueAsNumber
      if (val === NaN) {
        e.target.value = '0'
      } else {
        e.target.value = val
      }
      this.updateOrder({good, qty:val})
    },
    ...mapActions([
      'loadGoodsList',
      'updateOrder',
      'saveOrder'
    ])
  }
}

</script>

<style lang="sass">
.goods-list
  table-layout: fixed
  tr.in-order
    font-weight: bold
  .col-code, .col-brand
    width: 10%
    overflow: hidden
  .col-descr
    width:auto
  .col-price
    width: 10%
  td.col-price
    text-align: right
  .col-qty
    width: 15%
  .good-qty
    text-align: right

</style>
