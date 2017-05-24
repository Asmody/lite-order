<template lang="pug">
  transition(name="fade")
    .notification.is-danger(v-if="error")
      button.delete(@click="clearError") 
      | {{error}}
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'error-msg',
  computed: {
    ...mapGetters([
      'error'
    ])
  },
  methods: {
    ...mapActions([
      'clearError'
    ])
  }
}

</script>

<style lang="sass" scoped>

</style>
