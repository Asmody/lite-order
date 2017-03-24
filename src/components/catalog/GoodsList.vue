<template>
  <table id="goods-list" class="table is-striped is-scroll">
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
      <tr v-for="(good,idx) in goods" :key="good.id" :class="{'in-order':good.qty>0}">
        <td class="col-code">{{good.code}}</td>
        <td class="col-brand"><div>{{good.brand}}</div></td>
        <td class="col-descr"><div>{{good.description.substr(0, 135)}}</div></td>
        <td class="col-price">{{money(good.price)}}</td>
        <td class="col-qty">
          <input class="input is-small good-qty" type="number" min="0" maxlength="10" v-model="good.qty" @input="(e)=>{updateQty(good, e)}" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'goods-list',
  data () {
    return {
      money: utils.money
    }
  },
  computed: {
    ...mapGetters([
      'goods'
    ])
  },
  beforeMount () {
    this.loadGoodsList()
  },
  methods: {
    updateQty (good, e) {
      let val = e.target.valueAsNumber
      if (val === NaN) {
        e.target.value = '0'
      } else {
        e.target.value = val
      }
      this.updateOrder({good, qty:val})
    },
    ...mapActions([
        'loadGoodsList',
        'updateOrder',
        'saveOrder'
    ])
  }
}

</script>

<style lang="scss" scoped>
#goods-list{
  table-layout: fixed;
}
.is-scroll{
  tbody{
    display: block;
    max-height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  tr{
    display: table;
    table-layout: fixed;
    width: 100%;
    td{
      overflow: hidden;
      height: 5vh;
    }
  }
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
tr.in-order{
  font-weight: bold;
}
.good-qty{
  text-align: right;
}
</style>
