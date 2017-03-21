<template>
  <div class="panel">
    <div class="panel-block">
      <p class="control has-icon">
        <input class="input is-small" type="text" />
        <span class="icon is-small"><vf-icon icon="search" fixed></vf-icon></span>
      </p>
    </div>
    <a class="panel-block" v-for="group in groups" :key="group['.key']">{{group.name}}</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'group-list',
  data () {
    return {

    }
  },
  beforeMount () {
    this.loadGroupsList()
  },
  computed: {
    ...mapGetters([
      'groups'
    ])
  },
  methods: {
    ...mapActions([
      'loadGroupsList'
    ])
  }
}

</script>
