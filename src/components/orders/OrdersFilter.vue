<template lang="pug">
  .level
    .level-left
      .level-item
        datepicker(
          v-model="date"
          placeholder=""
          :config="{ wrap: true, dateFormat: 'd.m.Y' }"
        )
          p.control
            a.button(
              data-clear
              @click="clearDate()"
            )
              vf-icon(icon="close")
    .level-center
      .level-item
        p.control
          span.select
            select
              option(value="all") Все
              option(value="sended") Отправленные
              option(value="approved") Утвержденные
              option(value="payed") Оплаченные
    .level-right
      .level-item
        pagination
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import Datepicker from '@/components/common/vue-bulma-datepicker/src'
import Pagination from './Pagination'

export default {
  name: 'orders-filter',
  data () {
    return {
      date: ''
    }
  },
  mounted () {
    this.date = utils.date(this.filter.date)
  },
  computed: {
    ...mapGetters({
      filter: 'ordersFilter'
    })
  },
  watch: {
    date (newDate) {
      if (newDate === '') {
        this.filterOrdersByDate(null)
      } else {
        let dt = utils.dateFromString(newDate)
        console.log(dt)
        this.filterOrdersByDate(dt)
      }
    }
  },
  components: {
    Datepicker,
    Pagination
  },
  methods: {
    clearDate () {
      this.date = ''
    },
    ...mapActions([
      'filterOrdersByDate'
    ])
  }
}
</script>