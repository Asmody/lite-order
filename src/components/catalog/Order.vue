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
            <option v-for="customer in userCustomers" :key="customer.id" :value="customer.id">
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
    <div class="order-items">
      <table class="table is-striped is-scroll">
        <thead>
          <tr>
            <th>Код</th>
            <th>Бренд</th>
            <th>Наименование</th>
            <th>Цена</th>
            <th>Кол-во</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in orderItems" :key="key">
            <td>{{item.good.code}}</td>
            <td>{{item.good.brand}}</td>
            <td>{{item.good.description}}</td>
            <td>{{money(item.price)}}</td>
            <td>{{item.qty}}</td>
            <td>{{money(item.price * item.qty)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/Modal'
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
    Modal
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
