<template lang="pug">
  nav.pagination
    p.control
      span.select
        select(
          v-model="perPage"
          @change="perPageChange"
        )
          option(
            v-for="pp in perPageList"
            :value="pp"
          ) {{pp}}
    a.pagination-link(@click="setGoodsListFirstPage")
      vf-icon(icon="fast-backward" fixed)
    a.pagination-link(@click="setGoodsListPrevPage")
      vf-icon(icon="step-backward" fixed)
    span.pagination-link.is-current {{goodsNav.currentPage}}
    a.pagination-link(@click="setGoodsListNextPage")
      vf-icon(icon="step-forward" fixed)
    a.pagination-link(@click="setGoodsListLastPage")
      vf-icon(icon="fast-forward" fixed)
    span.pagination-link {{goodsNav.pages}}
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: 'pagination',
  data () {
    return {
      perPage: 0,
      perPageList: [10, 20, 50, 100]
    }
  },
  beforeMount () {
    this.perPage = this.goodsPerPage
  },
  computed: {
    ...mapState({
      goodsPerPage: state => state.goods.options.perPage,
    }),
    ...mapGetters([
      'goodsNav'
    ])
  },
  methods: {
    perPageChange () {
      this.setGoodsPerPage(parseInt(this.perPage))
    },
    ...mapActions([
      'setGoodsListNextPage',
      'setGoodsListPrevPage',
      'setGoodsListLastPage',
      'setGoodsListFirstPage',
      'setGoodsPerPage'
    ])
  }

}
</script>

<style lang="sass">
#goods-pagination
  display: flex
  flex-direction: row
</style>
