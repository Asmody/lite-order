<template>
  <transition name="fade">
    <div class="notification is-danger" v-if="error">
      <button class="delete" @click="clearError"></button>
      {{error}}
    </div>
  </transition>
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

<style lang="scss" scoped>

</style>
