<template lang="pug">
  .cart
    .card
      .card-header
        span.card-header-icon
          vf-icon(icon="shopping-cart")
        p.card-header-title {{money(total)}}
      .card-footer
        a.card-footer-item(@click="showOrder=true") Оформить
        a.card-footer-item(@click="clearOrder") Очистить
    order(
      :is-active="showOrder"
      @close="showOrder=false"
    )
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
