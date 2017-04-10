<template>
  <scroll-table id="orders-list" t-class="table is-striped orders-list">
    <div class="level" slot="tcaption">
      <div class="level-left">
        <div class="level-item">
          Поиск
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <pagination></pagination>
        </div>
      </div>
    </div>
    <thead slot="thead">
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
  </scroll-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ScrollTable from '@/components/common/ScrollTable'
import Pagination from '@/components/orders/Pagination'

export default {
  name: 'orders-list',
  data () {
    return {
      money: utils.money
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
    ...mapActions([
      'loadOrdersList'
    ])
  }
}
</script>

<style lang="scss">
.orders-list{
  table-layout: fixed;
  
}
</style>
