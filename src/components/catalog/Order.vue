<template lang="pug">
  modal(
    :is-active="active"
    @close="close"
    @save="saveOrder"
    title="Оформление заказа"
  )
    .level
      .level-left
        .level-item # {{order.number}}
      .level-center
        .level-item Всего позиций: {{orderSize}}
      .level-right
        .level-item На сумму: {{money(orderTotal)}}
    .field.has-addons
      p.control
        span.select
          select(v-model="order.customer")
            option(
              v-for="customer in userCustomers"
              :key="customer.id"
              :value="customer"
            ) {{customer.description}}
      p.control
        button.button
          vf-icon(icon="plus" fixed)
    .field
      p.control
        input.input(
          type="text"
          placeholder="Комментарий к заказу"
          v-model="order.comment"
        ) 
    scroll-table(t-class="table table-striped order-items")
      thead(slot="thead")
        tr
          th.col-code Код
          th.col-brand Бренд
          th.col-descr Наименование
          th.col-price Цена
          th.col-qty Кол-во
          th.col-sum Сtумма
      tbody
        tr(
          v-for="(item, key) in orderItems"
          :key="key"
        )
          td.col-code {{item.good.code}}
          td.col-brand {{item.good.brand}}
          td.col-descr {{item.good.description}}
          td.col-price {{money(item.price)}}
          td.col-qty 
            input.input.is-small.good-qty(
              type="number"
              min="0"
              maxlength="10"
              v-model.number="item.qty"
              @input="(e)=>{updateQty(item.good, e)}"
            )
          td.col-sum {{money(item.price * item.qty)}}
</template>

<script>
import Modal from '@/components/common/Modal'
import ScrollTable from '@/components/common/ScrollTable'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'order',
  data () {
    return {
      money: utils.money
    }
  },
  props: [
    'isActive'
  ],
  components: {
    Modal,
    ScrollTable
  },
  beforeMount () {
  },
  computed: {
    active () {
      return this.isActive
    },
    ...mapGetters([
      'order',
      'orderItems',
      'orderTotal',
      'orderSize',
      'userCustomers'
    ])
  },
  methods: {
    close () {
      this.$emit('close')
    },
    saveOrder () {
      this.createOrder()
      console.log('Save order')
      this.$emit('close')
      this.$router.push('/orders')
    },
    updateQty (good, e) {
      let val = e.target.valueAsNumber
      if (val === NaN) {
        e.target.value = 0
      } else {
        e.target.value = val
      }
      this.updateOrder({good, qty:val})

    },
    ...mapActions([
      'createOrder',
      'loadUserCustomers',
      'updateOrder'
    ])
  }
}

</script>

<style lang="sass">
.order-items
  table-layout: fixed
  .col-code, .col-brand,
  .col-price, .col-qty, .col-sum
    width: 10%
  td
    &.col-price, &.col-qty, &.col-sum
      text-align: right

</style>