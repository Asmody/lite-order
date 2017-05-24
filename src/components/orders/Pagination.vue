<template lang="pug">
  nav.pagination
    a.pagination-link(@click="")
      vf-icon(icon="fast-backward" fixed)
    a.pagination-link(@click="")
      vf-icon(icon="step-backward" fixed)
    span.pagination-link.is-current {{curPage}}
    a.pagination-link(@click="")
      vf-icon(icon="step-forward" fixed)
    a.pagination-link(@click="")
      vf-icon(icon="fast-forward" fixed)
    span.pagination-link {{pages}}
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'pagination',
  data () {
    return {
      curPage: 1,
      pages: 100
    }
  }
}
</script>

<style lang="sass">

</style>