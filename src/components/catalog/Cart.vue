<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">
        Заказ
      </p>
      <a class="card-header-icon" @click="showOrder = !showOrder">
        <vf-icon icon="angle-down" />
      </a>
    </div>
    <div class="card-content" :class="{  'is-hidden': !showOrder }">
      Список заказа
    </div>
    <div class="card-footer">
      <a class="card-footer-item">Оформить</a>
      <a class="card-footer-item">Очистить</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
      showOrder: false
    }
  },
}
</script>
