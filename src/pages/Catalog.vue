<template>
  <div id="catalog" class="full-view">
    <div class="columns">
      <div class="column is-9">
        <goods-list></goods-list>
      </div>
      <div class="column">
        <aside class="aside">
          <cart></cart>
          <group-list></group-list>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsList from '@/components/catalog/GoodsList'
import Cart from '@/components/catalog/Cart'
import GroupList from '@/components/catalog/GroupList'
import Order from '@/components/catalog/Order'

export default {
  name: 'catalog',
  data () {
    return {
    }
  },
  components: {
    GoodsList,
    Cart,
    GroupList,
    Order
  }
}
</script>

<style lang="sass">
.aside
  display: flex
  flex-direction: column
  height: 100%
  > *
    flex: 0 0 auto
</style>
