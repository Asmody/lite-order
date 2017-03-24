<template>
  <nav class="pagination">
    <a class="pagination-link" @click=""><vf-icon icon="fast-backward" fixed /></a>
    <a class="pagination-link" @click=""><vf-icon icon="step-backward" fixed /></a>
    <a class="pagination-link is-current">1</a>
    <a class="pagination-link" @click=""><vf-icon icon="step-forward" fixed /></a>
    <a class="pagination-link" @click=""><vf-icon icon="fast-forward" fixed /></a>
    <span class="pagination-link">100</span>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'pagination',
  
}
</script>

<style lang="scss">

</style>