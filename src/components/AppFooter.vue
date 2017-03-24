<template>
  <footer>
    <div class="container is-fluid">
      id: {{user.id}} / {{isLoggedIn ? 'logged in' : 'logged out'}}
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app-footer',
  computed: {
    ...mapGetters([
      'user',
      'isLoggedIn'
    ])
  }
}

</script>

<style lang="scss">
$footerHeight: 60px;
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: $footerHeight;
  line-height: $footerHeight;
  background: #f5f5f5;
}
</style>
