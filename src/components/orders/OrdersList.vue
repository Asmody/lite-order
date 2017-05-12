<template lang="pug">
  scroll-table#orders-list(
    t-class="table is-striped orders-list"
  )
    orders-filter(slot="tcaption")
    thead(slot="thead")
      tr
        th.col-num #
        th.col-date Дата
        th.col-cstmr Клиент
        th.col-sum Сумма
        th.col-state Статус
        th.col-actions
    tbody
      template(v-for="order in orders")
        tr(:key="order.id")
          td.col-num
            span.icon.is-small.open-row(@click="open(order)")
              vf-icon(:icon="opened(order) ? 'minus-square-o' : 'plus-square-o'")
            | {{order.number}}
          td.col-date {{dateFmt(order.date)}}
          td.col-cstmr {{ldGet(order, ['customer', 'description'], '')}}
          td.col-sum {{moneyFmt(order.total)}}
          td.col-state state
          td.col-actions 
            .field.is-grouped
              p.control
                button.button.is-small.is-primary.is-outlined
                  span.icon.is-small
                    vf-icon(icon="print")
              p.control
                button.button.is-small.is-info.is-outlined
                  span.icon.is-small
                    vf-icon(icon="repeat")
              p.control
                button.button.is-small.is-danger.is-outlined(@click="delOrder(order)")
                  span.icon.is-small
                    vf-icon(icon="trash-o")
        tr(v-if="opened(order)")
          td.col-items(colspan="6")
            opened-order(:order="order")
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

import ScrollTable from '@/components/common/ScrollTable'
import OrdersFilter from './OrdersFilter'
import OpenedOrder from './OpenedOrder'

import Message from '@/plugins/Message'
Vue.use(Message)

export default {
  name: 'orders-list',
  data () {
    return {
      openedRows: {}
    }
  },
  components: {
    ScrollTable,
    OrdersFilter,
    OpenedOrder
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
    open (row) {
      Vue.set(this.openedRows, row.id, !this.openedRows[row.id])
    },
    opened (row) {
      return !!this.openedRows[row.id]
    },
    delOrder (order) {
      this.$msg.confirm({
        title: "Подтвердите удаление",
        text: `Удалить заказ ${order.id}?`,
      })
      .then(isConfirm => {
        this.deleteOrder(order)
      })
    },
    moneyFmt: utils.money,
    dateFmt: utils.date,
    ldGet: _.get,
    ...mapActions([
      'loadOrdersList',
      'deleteOrder'
    ])
  }
}
</script>

<style lang="sass">
.orders-list
  table-layout: fixed
  .col-num
    width: 4rem
  .col-date
    width: 10rem
  .col-actions
    width: 10rem
    text-align: right
  .col-sum
    width: 10rem
  .col-state
    width: 10rem
  td.col-sum
    text-align: right
    
.open-row
  cursor: pointer
</style>
