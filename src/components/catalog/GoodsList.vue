<template>
  <table class="table is-striped">
    <thead>
      <tr>
        <th>Код</th>
        <th>Бренд</th>
        <th>Наименование</th>
        <th>Цена</th>
        <th>К-во</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="good in goods" :key="good['.key']">
        <td>{{good.code}}</td>
        <td>{{good.brand}}</td>
        <td>{{good.description}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import db from '@/db'

export default {
  name: 'goods-list',
  computed: {
    ...mapGetters([
      'goods'
    ])
  },
  beforeMount () {
    this.loadGoodsList()
  },
  methods: {
    ...mapActions([
        'loadGoodsList'
    ])
  }
}

</script>
