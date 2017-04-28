<template lang="pug">
  #orders-list
    .level
      .level-left
        | Поиск
      .level-right
        pagination

    .orders-list
      .orders-list-row(
        v-for="order in orders"
        :key="order.id"
      )
        .orders-list-row-column.column-number 
          span.icon.is-small
            vf-icon(icon="chevron-down")
          | {{order.number}}
        .orders-list-row-column.column-date {{dateFmt(order.date)}}
        .orders-list-row-column.column-customer {{ldGet(order, ['customer', 'description'], '')}}
        .orders-list-row-column.column-sum {{moneyFmt(order.total)}}
        .orders-list-row-column.column-state state
        .orders-list-row-column.column-actions actions

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ScrollTable from '@/components/common/ScrollTable'
import Pagination from '@/components/orders/Pagination'

export default {
  name: 'orders-list',
  data () {
    return {
    }
  },
  components: {
    ScrollTable,
    Pagination
  },
  beforeMount () {
    this.loadOrdersList()
  },
  computed: {
    ...mapGetters([
      'orders'
    ])
  },
  methods: {
    moneyFmt: utils.money,
    dateFmt: utils.date,
    ldGet: _.get,
    ...mapActions([
      'loadOrdersList'
    ])
  }
}
</script>

<style lang="sass">
#orders-list
  width: 100%
  display: flex
  flex: 1
  flex-direction: column
  height: 100%
  > *
    flex: 0 0 auto
  .main-view
    display: flex
    flex: 1 1 auto
    overflow: auto
  

.orders-list
  width: 100%
  display: flex
  flex-direction: column
  &-row
    flex: 1
    display: flex
    flex-direction: row
    justify-content: space-between
    background: #f5f5f5
    margin: 0.2rem
    &-column
      padding: 0.6rem
</style>
