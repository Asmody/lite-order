<template lang="pug">
  .modal(:class="{'is-active':active}")
    .modal-background
    .modal-card
      .modal-card-head
        p.modal-card-title {{title}}
        button.delete(@click="close")
      .modal-card-body
        slot
      .modal-card-foot
        a.button.is-success(@click="save") Сохранить
        a.button(@click="close") Отменить
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

<style lang="sass" scoped>
.modal-card
  width: 95%
  &-body
    display: flex
    flex-direction: column
</style>