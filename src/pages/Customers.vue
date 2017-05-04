<template lang="pug">
  #customers.full-view
    customers-list
</template>

<script>

import CustomersList from '@/components/customers/CustomersList'

export default {
  name: 'customers',
  components: {
    CustomersList
  }
}
</script>

<style lang="sass">
  
</style>