<template>
  <table id="orders-list" class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Дата</th>
        <th>Клиент</th>
        <th>Сумма</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{order.number}}</td>
        <td>{{order.date}}</td>
        <td>customer</td>
        <td>{{money(order.total)}}</td>
        <td>actions</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'orders-list',
  data () {
    return {
      money: utils.money
    }
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
    ...mapActions([
      'loadOrdersList'
    ])
  }
}
</script>

<style lang="scss">
  
</style>
