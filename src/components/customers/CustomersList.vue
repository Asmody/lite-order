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
      tr(v-for="customer in customers" :key="customer.id")
        td.col-descr {{ customer.description }}
        td.col-inn {{ customer.inn }}
        td.col-phone {{ customer.phone }}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ScrollTable from '@/components/common/ScrollTable'

export default {
  name: 'customers-list',
  components: {
    ScrollTable
  },
  beforeMount () {

  },
  computed: {
    ...mapGetters({
      customers: 'userCustomers'
    })
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
  
</style>