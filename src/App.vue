<template>
  <div id="app">
      <header>
        <nav class="nav has-shadow">
          <div class="nav-left">
            <router-link class="nav-item" v-for="(route,idx) in routes" :key="idx" v-if="route.name && !route.meta.hidden" :to="route.path">
              {{ route.name }}
            </router-link>
          </div>
        </nav>
      </header>
      <section class="section">
        <div class="container is-fluid">
          <transition name="fade">
            <div class="notification is-danger" v-if="error">
              <button class="delete" @click="clearError"></button>
              {{error}}
            </div>
          </transition>
          <router-view></router-view>
        </div>
      </section>
  </div>
</template>

<script>
import { routes } from '@/router'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      routes,
    }
  },
  computed: mapGetters([
    'error'
  ]),
  methods: {
    ...mapActions([
      'clearError'
    ])
  },
}
</script>

<style lang="scss">
.nav-item{
  text-transform: uppercase;
}
.nav-item.is-active{
  border-bottom: #72d0eb 2px solid;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
  opacity: 0
}
</style>
