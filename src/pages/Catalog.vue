<template>
  <div class="columns">
    <div class="column is-three-quarters">
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
      <div class="tale is-ancestor">
        <div class="tale is-vertical is-12">
          <div class="tale box">
            <goods-list></goods-list>
          </div>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="columns">
        <div class="column">
          <cart></cart>
        </div>
      </div>
      <div class="columns">
        <div class="column">
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
