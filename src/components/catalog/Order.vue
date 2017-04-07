<template>
  <modal :is-active="active" @close="close" @save="saveOrder" title="Оформление заказа">
    <div class="level">
      <div class="level-left">
        <div class="level-item"># {{order.number}}</div>
      </div>
      <div class="level-center">
        <div class="level-item">Всего позиций: {{orderSize}}</div>
      </div>
      <div class="level-right">
        <div class="level-item">На сумму: {{money(orderTotal)}}</div>
      </div>
    </div>
    <div class="field">
      <p class="control">
        <span class="select">
          <select v-model="order.customer">
            <option v-for="customer in userCustomers" :key="customer.id" :value="customer">
              {{customer.description}}
            </option>
          </select>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="Комментарий к заказу" v-model="order.comment">
      </p>
    </div>
    <scroll-table t-class="table is-striped order-items">
      <thead slot="thead">
        <tr>
          <th class="col-code">Код</th>
          <th class="col-brand">Бренд</th>
          <th class="col-descr">Наименование</th>
          <th class="col-price">Цена</th>
          <th class="col-qty">Кол-во</th>
          <th class="col-sum">Сумма</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in orderItems" :key="key">
          <td class="col-code">{{item.good.code}}</td>
          <td class="col-brand">{{item.good.brand}}</td>
          <td class="col-descr">{{item.good.description}}</td>
          <td class="col-price">{{money(item.price)}}</td>
          <td class="col-qty">{{item.qty}}</td>
          <td class="col-sum">{{money(item.price * item.qty)}}</td>
        </tr>
      </tbody>
    </scroll-table>
  </modal>
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
    ...mapActions([
      'createOrder',
      'loadUserCustomers'
    ])
  }
}

</script>

<style lang="scss">
.order-items{
  table-layout: fixed;
  .col-code, .col-brand,
  .col-price,.col-qty,.col-sum{
    width: 10%;
  }
  td{
    &.col-price,&.col-qty,&.col-sum{
      text-align: right;
    }
  }
}
</style>