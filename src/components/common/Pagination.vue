<template lang="pug">
nav.pagination
  p.control
    span.select
      select(
        :value="perPage"
        @change="changePerPage"
      )
        option(
          v-for="pp in perPageList"
          :value="pp"
        ) {{pp}}
  a.pagination-link(@click="changePage(prevPage)" :disabled="!hasPrev()")
    vf-icon(icon="angle-left" fixed)
  a.pagination-link(v-if="hasFirst()" @click="changePage(1)") 1
  span(v-if="hasFirst()") ...
  a.pagination-link(
    v-for="page in pagesRange" 
    :class="{ 'is-current': page === current}"
    @click="changePage(page)"
  ) {{ page }}
  span(v-if="hasLast()") ...
  a.pagination-link(v-if="hasLast()" @click="changePage(total)") {{ total }}
  a.pagination-link(@click="changePage(nextPage)" :disabled="!hasNext()")
    vf-icon(icon="angle-right" fixed)
</template>

<script>
export default {
  name: 'pagination',
  data () {
    return {
      perPageList: [10, 20, 50, 100]
    }
  },
  props: {
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 20
    },
    pageRange: {
      type: Number,
      default: 2
    }
  },
  computed: {
    nextPage () {
      return this.current + 1
    },
    prevPage () { 
      return this.current - 1
    },
    rangeStart () {
      const start = this.current - this.pageRange
      return (start > 0) ? start : 1
    },
    rangeEnd () {
      const end = this.current + this.pageRange
      return (end < this.total) ? end : this.total
    },
    pagesRange () {
      let range = []
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        range.push(i)
      }
      return range
    }
  },
  methods: {
    hasPrev () {
      return this.current > this.pageRange
    },
    hasNext () {
      return this.current < this.total - this.pageRange
    },
    hasFirst () {
      return this.rangeStart > 1
    },
    hasLast () {
      return this.rangeEnd < this.total
    },
    changePage (page) {
      this.$emit('page-changed', page)
    },
    changePerPage (e) {
      let newPerPage = parseInt(e.target.value)
      this.$emit('perpage-changed', newPerPage)
    }
  }
}  
</script>


<style lang="sass">

</style>