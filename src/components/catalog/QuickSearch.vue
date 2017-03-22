<template>
  <p class="control has-addons">
    <input v-model="search" class="input" type="text" placeholder="код или наименование" />
    <button class="button" @click="makeSeatch">
      <vf-icon icon="search" fixed />
    </button>
    <button class="button" @click="clearSearch">
      <vf-icon icon="times" fixed />
    </button>
  </p>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'quick-search',
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search (newSearch) {
      this.makeSeatch()
    }
  },
  methods: {
    makeSeatch () {
      if (this.search.length > 2) {
        this.setGoodsFilter(this.search)
      } else if (!this.search) {
        this.clearGoodsFilter()
      }
    },
    clearSearch () {
      this.search = ''
      this.clearGoodsFilter()
    },
    ...mapActions([
      'setGoodsFilter',
      'clearGoodsFilter'
    ])
  }
}
</script>
