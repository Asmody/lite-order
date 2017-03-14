<template>
  <table id="goods-list" class="table is-striped">
    <thead>
      <tr>
        <th class="col-code">Код</th>
        <th class="col-brand">Бренд</th>
        <th class="col-descr">Наименование</th>
        <th class="col-price">Цена</th>
        <th class="col-qty">К-во</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(good,idx) in goods" :key="good['.key']">
        <td class="col-code">{{good.code}}</td>
        <td class="col-brand">{{good.brand}}</td>
        <td class="col-descr">{{good.description}}</td>
        <td class="col-price">{{good.price}}</td>
        <td class="col-qty">
          <input class="input is-small" type="number" min="0" maxlength="10" v-model="good.qty" @input="(e)=>{updateQty(idx, e)}" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
    updateQty (idx, e) {
      let val = e.target.valueAsNumber
      console.log(val);
      if (val === NaN) {
        e.target.value = '0'
      } else {
        this.updateOrder({good:this.goods[idx], qty:val})
      }
    },
    ...mapActions([
        'loadGoodsList',
        'updateOrder'
    ])
  }
}

</script>

<style scoped>
#goods-list{
  table-layout: fixed;
}
.col-code, .col-brand{
  width:10%;
}
.col-descr{
  width:auto;
}
.col-price{
  width:10%;
}
td.col-price{
  text-align: right;
}
.col-qty{
  width:15%;
}
</style>
