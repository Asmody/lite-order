<template>
  <div id="app">
    <spinner></spinner>
    <template v-if="isLoggedIn">
      <app-nav></app-nav>
      <section id="page" class="section">
        <error-msg></error-msg>
        <div class="container is-fluid">
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
    Spinner,
  },
  computed: mapGetters([
    'isLoggedIn'
  ]),
  methods: {
  }
}
</script>

<style lang="scss">
$footerHeight: 60px;
html{
  position: relative;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
}
body{
  margin-bottom: $footerHeight; 
  min-height: 100vh;
  height: 100%;
}
#app, #page{
}
#app{
  height: 100%;
}
#page{
  height: calc(100vh-$footerHeight);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active для <2.1.8 */ {
  opacity: 0
}
</style>
