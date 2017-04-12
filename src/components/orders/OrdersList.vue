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
        <th class="col-num">#</th>
        <th class="col-date">Дата</th>
        <th class="col-cstmr">Клиент</th>
        <th class="col-sum">Сумма</th>
        <th class="col-state">Статус</th>
        <th class="col-actions"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td class="col-num">{{order.number}}</td>
        <td class="col-date">{{dateFmt(order.date)}}</td>
        <td class="col-cstmr">{{ldGet(order, ['customer', 'description'], '')}}</td>
        <td class="col-sum">{{moneyFmt(order.total)}}</td>
        <td class="col-state">state</td>
        <td class="col-actions">actions</td>
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

<style lang="scss">
.orders-list{
  table-layout: fixed;
  .col-num{
    width: 4rem;
  }
  .col-date{
    width: 10rem;
  }
  .col-actions{
    width: 10rem;
  }
  .col-sum{
    width: 10rem;
  }
  .col-state{
    width: 10rem;
  }
  td.col-sum{
    text-align: right;
  }
}
</style>
