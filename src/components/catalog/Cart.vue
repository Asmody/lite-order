<template>
  <div class="cart">
    <div class="card">
      <div class="card-header">
        <span class="card-header-icon" >
          <vf-icon icon="shopping-cart"></vf-icon>
        </span>
        <p class="card-header-title">
          {{total}}
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
  computed: {
    ...mapGetters({
      total: 'orderTotal'
    })
  },
  methods: {
    ...mapActions([
      'clearOrder'
    ])
  }
}
</script>
