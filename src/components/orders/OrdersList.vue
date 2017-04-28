<template>
  <scroll-table id="orders-list" t-class="table is-striped orders-list">
    <div class="level" slot="tcaption">
      <div class="level-left">
        <div class="level-item">
          <div class="field">
            <p class="control">
              <span class="select is-small">
                <select name="" id="">
                  <option value="">Все</option>
                  <option value="">Отправленные</option>
                  <option value="">Утвержденные</option>

                </select>
              </span>
            </p>
          </div>
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
        <th class="col-actions">
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-for="order in orders"> 
      <tr :key="order.id">
        <td class="col-num">
          <span class="icon is-small open-order" @click="open(order)">
            <vf-icon :icon="opened(order) ? 'minus-square-o' : 'plus-square-o'"></vf-icon>
          </span>
          {{order.number}}
        </td>
        <td class="col-date">{{dateFmt(order.date)}}</td>
        <td class="col-cstmr">{{ldGet(order, ['customer', 'description'], '')}}</td>
        <td class="col-sum">{{moneyFmt(order.total)}}</td>
        <td class="col-state">state</td>
        <td class="col-actions">
          <div class="field is-grouped">
          <p class="control">
          <button class="button is-small is-primary is-outlined">
            <span class="icon is-small">
              <vf-icon icon="print"></vf-icon>
            </span>
          </button>       
          </p>
          <p class="control"> 
          <button class="button is-small is-info is-outlined">
            <span class="icon is-small">
              <vf-icon icon="repeat"></vf-icon>
            </span>
          </button>        
          </p>
          <p class="control">
          <button class="button is-small is-danger is-outlined">
            <span class="icon is-small">
              <vf-icon icon="trash-o"></vf-icon>
            </span>
          </button>        
          </p>
          </div>
        </td>
      </tr>
      <tr v-if="opened(order)">
        <td colspan="6" class="col-items">
         <div class="box">
          <table>
            <thead>
              <tr>
                <th>Код</th>
                <th>Наименование</th>
                <th>Бренд</th>
                <th>Цена</th>
                <th>Кол-во</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, key) in order.items" :key="key">
                <td>{{item.good.code}}</td>
                <td>{{item.good.description}}</td>
                <td>{{item.good.brand}}</td>
                <td>{{moneyFmt(item.price)}}</td>
                <td>{{item.qty}}</td>
                <td>{{moneyFmt(item.price * item.qty)}}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colspan="5">Итого:</th>
                <th>{{moneyFmt(0.0)}}</th>
              </tr>
            </tfoot>
          </table>
          </div>
        </td>
      </tr>
      </template>
    </tbody>
  </scroll-table>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

import ScrollTable from '@/components/common/ScrollTable'
import Pagination from '@/components/orders/Pagination'

export default {
  name: 'orders-list',
  data () {
    return {
      openedOrders: {}
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
    open (order) {
      Vue.set(this.openedOrders, order.id, !this.openedOrders[order.id])
    },
    opened (order) {
      return !!this.openedOrders[order.id]
    },
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
    text-align: right;
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
.open-order{
  cursor: pointer;
}
</style>
