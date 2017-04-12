<template>
  <div class="cart">
    <div class="card">
      <div class="card-header">
        <span class="card-header-icon" >
          <vf-icon icon="shopping-cart"></vf-icon>
        </span>
        <p class="card-header-title">
          {{money(total)}}
        </p>
      </div>
      <div class="card-footer">
        <a class="card-footer-item" @click="showOrder=true">Оформить</a>
        <a class="card-footer-item" @click="clearOrder">Очистить</a>
      </div>
    </div>
    <order :is-active="showOrder" @close="showOrder=false"></order>
  </div>
</template>

<script>
import Order from './Order'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'cart',
  data () {
    return {
      showOrder: false,
    }
  },
  components: {
    Order
  },
  beforeMount () {
    if (this.$store.state.order.number == 0) {
      this.initOrder()
    }
  },
  computed: {
    ...mapGetters({
      total: 'orderTotal',
    })
  },
  methods: {
    money: utils.money,
    ...mapActions([
      'initOrder',
      'clearOrder'
    ])
  }
}
</script>
