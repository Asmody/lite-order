<template lang="pug">
  scroll-table#customers-list(
    t-class="table is-striped customers-list"
  )
    thead(slot="thead")
      tr
        th.col-descr Наименование
        th.col-inn ИНН
        th.col-phone Телефон
    tbody
      template(v-for="customer in customers")
        tr(:key="customer.id")
          td.col-descr 
            span.icon.is-small.open-row(@click="open(customer)")
              vf-icon(:icon="opened(customer) ? 'minus-square-o' : 'plus-square-o'")
            | {{ customer.description }}
          td.col-inn {{ customer.inn }}
          td.col-phone {{ customer.phone }}
        tr(v-if="opened(customer)")
          td(colspan=3)
            .box {{ customer }}
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

import ScrollTable from '@/components/common/ScrollTable'

export default {
  name: 'customers-list',
  data () {
    return {
      openedRows: {}
    }
  },
  components: {
    ScrollTable
  },
  beforeMount () {

  },
  computed: {
    ...mapGetters({
      customers: 'userCustomers'
    })
  },
  methods: {
    open (row) {
      Vue.set(this.openedRows, row.id, !this.openedRows[row.id])
    },
    opened (row) {
      return !!this.openedRows[row.id]
    },

  }
}
</script>

<style lang="sass">
.customers-list
  table-layout: fixed
  .col-descr
  .col-inn
    width: 10rem
  .col-phone
    width: 10rem

.open-row
  cursor: pointer

</style>