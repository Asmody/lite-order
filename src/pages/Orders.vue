<template>
  <div class="orders">
    <div class="columns">
      <div class="column is-9">
        <div class="level">
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
        <div class="orders-list-wrap">
          <orders-list></orders-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrdersList from '@/components/orders/OrdersList'
import Pagination from '@/components/orders/Pagination'

export default {
  name: 'orders',
  components: {
    OrdersList,
    Pagination
  }
}

</script>

<style lang="scss">

</style>
