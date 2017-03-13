<template>
  <nav class="pagination">
    <a class="pagination-link" @click="setOrderListFirstPage"><vf-icon icon="fast-backward" fixed /></a>
    <a class="pagination-link" @click="setOrderListPrevPage"><vf-icon icon="step-backward" fixed /></a>
    <a class="pagination-link is-current">{{goodsOptions.currentPage}}</a>
    <a class="pagination-link" @click="setOrderListNextPage"><vf-icon icon="step-forward" fixed /></a>
    <a class="pagination-link" @click="setOrderListLastPage"><vf-icon icon="fast-forward" fixed /></a>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'pagination',
  computed: {
    ...mapGetters([
      'goodsOptions'
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
