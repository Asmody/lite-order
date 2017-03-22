<template>
  <modal :is-active="active" @close="close" @save="saveOrder" title="Оформление заказа">
    <div class="level has-shadow">
      <div class="level-left">
        <div class="level-item">Всего позиций: {{orderSize}}</div>
      </div>
      <div class="level-right">
        <div class="level-item">На сумму: {{money.format(orderTotal)}}</div>
      </div>
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
            <td>{{money.format(item.price)}}</td>
            <td>{{item.qty}}</td>
            <td>{{money.format(item.price * item.qty)}}</td>
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
      money: new Intl.NumberFormat('ru-RU', {
        style:'currency',
        currency: 'RUB',
        minimumFractionDigits: 2
      })
    }
  },
  props: [
    'isActive'
  ],
  components: {
    Modal
  },
  computed: {
    active () {
      return this.isActive
    },
    ...mapGetters([
      'order',
      'orderItems',
      'orderTotal',
      'orderSize'
    ])
  },
  methods: {
    close () {
      this.$emit('close')
    },
    saveOrder () {
      console.log('Save order')
      this.$emit('close')
    },
    ...mapActions([
    ])
  }
}

</script>
