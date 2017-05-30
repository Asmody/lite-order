<template lang="pug">
pagination(
  :current="goodsNav.currentPage"
  :total="goodsNav.pages"
  :per-page="goodsNav.perPage"
  @page-changed="goodsListChangePage"
  @perpage-changed="goodsListChangePerPage"
)
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Pagination from '@/components/common/Pagination'

export default {
  name: 'goods-pagination',
  components: {
    Pagination
  },
  computed: {
    ...mapGetters([
      'goodsNav'
    ])
  },
  methods: {
    ...mapActions([
      'goodsListChangePage',
      'goodsListChangePerPage'
    ])
  }
}
</script>

<style lang="sass">

</style>
