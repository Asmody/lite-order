<template lang="pug">
  #app.lk
    spinner
    template(v-if="isLoggedIn")
      app-nav
      section#page.lk-body
        error-msg
        router-view
    template(v-else)
      router-view
    app-footer
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

<style lang="sass">
$footerHeight: 60px
html
  position: relative
  height: 100%
  overflow: hidden

body
  height: 100vh
  margin: 0
  padding: 0

.lk
  height: 100%
  display: flex
  flex-direction: column
  &-header
    height: 50px
  &-footer
    height: 50px
  &-body
    flex: 1
    display: flex
    flex-direction: column
    overflow: hidden
    > *
      flex: 0 0 auto
      overflow: auto
    &-main,
    .full-view
      flex: 1
      display: flex
      height: 100%
      padding: 0.75rem

.fade-enter,
.fade-leave-to
  opacity: 0

.fade-enter-active,
.fade-leave-active
  transition: opacity .5s

</style>
