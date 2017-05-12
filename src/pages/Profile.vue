<template lang="pug">
  #profile.full-view
    .columns
      .column id: {{ user.id }}
    .columns
      .column email: {{ user.email }}
    .columns
      .column
        customers-list
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import CustomersList from '@/components/customers/CustomersList'

export default {
  name: 'profile',
  components: {
    CustomersList
  },
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

<style lang="sass">
#profile
  flex-direction: column
</style>
