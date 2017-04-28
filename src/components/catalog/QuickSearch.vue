<template>
  <div class="field has-addons">
  <p class="control">
    <input v-model="search" class="input" type="text" placeholder="код или наименование" />
    </p>
    <p class="control">
    <button class="button" @click="makeSeatch">
      <vf-icon icon="search" fixed />
    </button>
    </p>
    <p class="control">
    <button class="button" @click="clearSearch">
      <vf-icon icon="times" fixed />
    </button>
    </p>
  </div>
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
