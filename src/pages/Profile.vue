<template>
  <div class="profile">
    {{user}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'profile',
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    ...mapActions([
    ])
  }
}

</script>

<style lang="scss">

</style>
