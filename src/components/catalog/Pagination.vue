<template>
  <nav class="pagination">
    <a class="pagination-link" @click="setGoodsListFirstPage"><vf-icon icon="fast-backward" fixed /></a>
    <a class="pagination-link" @click="setGoodsListPrevPage"><vf-icon icon="step-backward" fixed /></a>
    <a class="pagination-link is-current">{{goodsNav.currentPage}}</a>
    <a class="pagination-link" @click="setGoodsListNextPage"><vf-icon icon="step-forward" fixed /></a>
    <a class="pagination-link" @click="setGoodsListLastPage"><vf-icon icon="fast-forward" fixed /></a>
    <span class="pagination-link">{{goodsNav.pages}}</span>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'pagination',
  computed: {
    ...mapGetters([
      'goodsNav'
    ])
  },
  methods: {
    ...mapActions([
      'setGoodsListNextPage',
      'setGoodsListPrevPage',
      'setGoodsListLastPage',
      'setGoodsListFirstPage'
    ])
  }

}
</script>
