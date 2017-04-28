<template>
  <nav class="pagination is-small">
    <div class="field">
    <p class="control">
      <span class="select is-small" >
        <select v-model="perPage" @change="perPageChange">
          <option v-for="pp in perPageList" :value="pp">{{pp}}</option>
        </select>
      </span>
    </p></div>
    <a class="pagination-link" @click="setGoodsListFirstPage"><vf-icon icon="fast-backward" fixed /></a>
    <a class="pagination-link" @click="setGoodsListPrevPage"><vf-icon icon="step-backward" fixed /></a>
    <a class="pagination-link is-current">{{goodsNav.currentPage}}</a>
    <a class="pagination-link" @click="setGoodsListNextPage"><vf-icon icon="step-forward" fixed /></a>
    <a class="pagination-link" @click="setGoodsListLastPage"><vf-icon icon="fast-forward" fixed /></a>
    <span class="pagination-link">{{goodsNav.pages}}</span>
  </nav>
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
      goodsNav: state => state.goods.nav
    }),
    ...mapGetters([
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
