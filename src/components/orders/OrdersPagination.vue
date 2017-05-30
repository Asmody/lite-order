<template lang="pug">
pagination(
  :current="curPage"
  :total="pages"
  :perPage="10"
  @page-changed="pageChanged"
  @perpage-changed="perPageChanged"
)
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Pagination from '@/components/common/Pagination'

export default {
  name: 'orders-pagination',
  components: {
    Pagination
  },
  data () {
    return {
      curPage: 1,
      pages: 100
    }
  },
  methods: {
    pageChanged (page) {

    },
    perPageChanged (perPage) {

    }
  }
}
</script>

<style lang="sass">

</style>