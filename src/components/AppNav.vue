<template>
  <header class="lk-header">
    <nav class="nav has-shadow">
      <div class="nav-left">
        <router-link class="nav-item" v-for="(route,idx) in routes" :key="idx" v-if="route.name && !route.meta.hidden" :to="route.path">
          {{ route.name }}
        </router-link>
      </div>
      <div class="nav-right">
        <router-link class="nav-item" :to="'/profile'">
          <span class="icon">
            <vf-icon icon="user"></vf-icon>
          </span>
          {{ user.email }}
        </router-link>
        <a class="nav-item" @click="logout">
          Выход
        </a>
      </div>
    </nav>
  </header>
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

<style lang="scss">
.nav-item{
  text-transform: uppercase;
}
.nav-item.is-active{
  border-bottom: #72d0eb 2px solid;
}
</style>
