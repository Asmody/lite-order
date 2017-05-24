<template lang="pug">
  .field.has-addons
    p.control
      input.input(
        v-model="search"
        type="text"
        placeholder="код или наименование"
      )
    p.control
      button.button(@click="makeSeatch")
        vf-icon(icon="search" fixed)
    p.control
      button.button(@click="clearSearch")
        vf-icon(icon="times" fixed)
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
  beforeMount () {
    this.search = this.$store.state.goods.filter
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
