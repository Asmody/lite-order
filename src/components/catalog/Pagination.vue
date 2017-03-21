<template>
  <nav class="pagination">
    <a class="pagination-link" @click="setOrderListFirstPage"><vf-icon icon="fast-backward" fixed /></a>
    <a class="pagination-link" @click="setOrderListPrevPage"><vf-icon icon="step-backward" fixed /></a>
    <a class="pagination-link is-current">{{goodsNav.currentPage}}</a>
    <a class="pagination-link" @click="setOrderListNextPage"><vf-icon icon="step-forward" fixed /></a>
    <a class="pagination-link" @click="setOrderListLastPage"><vf-icon icon="fast-forward" fixed /></a>
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
      'setOrderListNextPage',
      'setOrderListPrevPage',
      'setOrderListLastPage',
      'setOrderListFirstPage'
    ])
  }

}
</script>
