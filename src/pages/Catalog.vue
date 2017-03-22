<template>
  <div class="catalog">
    <div class="columns">
      <div class="column is-9">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <quick-search></quick-search>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item>">
              <pagination></pagination>
            </div>
          </div>
        </div>
        <div class="goods-list-wrap">
          <goods-list></goods-list>
        </div>
      </div>
      <div class="column">
          <cart></cart>
          <div class="group-list-wrap">
            <group-list></group-list>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuickSearch from '@/components/catalog/QuickSearch'
import Pagination from '@/components/catalog/Pagination'
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
    QuickSearch,
    Pagination,
    GoodsList,
    Cart,
    GroupList,
    Order
  }
}
</script>

<style lang="scss">
.goods-list-wrap{
  height: 76vh;
  overflow-y: auto;
/*  border: 1px red solid; */
}
.group-list-wrap{
  margin-top: 10px;
  height: 71vh;
  overflow-y: auto;
/*  border: 1px red solid; */
}
</style>
