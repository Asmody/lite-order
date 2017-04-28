<template lang="pug">
  #orders.full-view
    orders-list
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

<style lang="sass">

</style>
