<template lang="pug">
  header.lk-header
    nav.nav.has-shadow
      .nav-left
        router-link.nav-item(
          v-for="(route,idx) in routes"
          :key="idx"
          v-if="route.name && !route.meta.hidden" 
          :to="route.path"
        ) {{ route.name }}
      .nav-right
        router-link.nav-item(
          :to="'/profile'"
        )
          span.icon
            vf-icon(icon="user") 
          | {{ user.email }}
        a.nav-item(
          @click="logout"
        ) Выход
</template>

<script>
import { routes } from '@/router'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app-nav',
  data () {
    return {
      routes
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    logout () {
      this.$auth.logout()
      this.$router.push({path:'/login',query:{redirect:'/'}})
    },
  }
}

</script>

<style lang="sass">
.nav-item
  text-transform: uppercase
  &.is-active
    border-bottom: #72d0eb 2px solid
</style>
