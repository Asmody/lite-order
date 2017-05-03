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
            a.button(data-toggle)
              vf-icon(icon="calendar")
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
import Datepicker from '@/components/common/vue-bulma-datepicker/src'
import Pagination from './Pagination'

export default {
  name: 'orders-filter',
  data () {
    return {
      date: ''
    }
  },
  components: {
    Datepicker,
    Pagination
  }
}
</script>