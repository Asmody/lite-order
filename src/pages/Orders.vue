<template>
  <div id="orders" class="full-view">
    <div class="columns">
      <div class="column is-12">
        <div class="orders-list-wrap">
          <orders-list></orders-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrdersList from '@/components/orders/OrdersList'

export default {
  name: 'orders',
  components: {
    OrdersList,
  }
}

</script>

<style lang="scss">

</style>
