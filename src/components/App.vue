<template>
  <div id="app">
    <spinner v-if="loading"></spinner>
    <template v-if="isLoggedIn">
      <app-nav></app-nav>
      <section class="section">
        <div class="container is-fluid">
          <error-msg></error-msg>
          <router-view></router-view>
        </div>
      </section>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import AppNav from './AppNav'
import AppFooter from './AppFooter'
import ErrorMsg from './ErrorMsg'
import Spinner from './Spinner'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    AppNav,
    AppFooter,
    ErrorMsg,
    Spinner
  },
  computed: mapGetters([
    'isLoggedIn',
    'loading'
  ]),
  methods: {
  }
}
</script>

<style lang="scss">
html{
  position: relative;
  height: 100%;
  overflow: hidden;
}
body{
  margin-bottom: 60px;
  height: 100%;
}
#app{
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
  opacity: 0
}
</style>
