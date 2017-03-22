<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent is-vertical is-9">
      <div class="tile is-child">
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
      </div>
      <div class="tile is-child">
        <goods-list></goods-list>
      </div>
    </div>
    <div class="tile is-parent is-vertical">
      <div class="tile is-child">
        <cart></cart>
      </div>
      <div class="tile is-child">
        <div id="group-list">
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
    GroupList
  }
}
</script>

<style lang="scss">
#group-list{
  flex: 1 1 auto;
  height: 1px;
  overflow-y: auto;
}
</style>
