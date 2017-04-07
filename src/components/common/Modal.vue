<template>
  <div class="modal" :class="{'is-active':active}">
    <div class="modal-background"></div>
    <div class="modal-card">
      <div class="modal-card-head">
        <p class="modal-card-title">{{title}}</p>
        <button class="delete" @click="close"></button>
      </div>
      <div class="modal-card-body">
        <slot></slot>
      </div>
      <div class="modal-card-foot">
        <a class="button is-success" @click="save">Сохранить</a>
        <a class="button" @click="close">Отменить</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props: [
    'isActive',
    'title'
  ],
  computed: {
    active () {
      return this.isActive
    }
  },
  methods: {
    save () {
      this.$emit('save')
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-card{
  width: 95%;
  &-body{
    display: flex;
    flex-direction: column;
  }
}
</style>