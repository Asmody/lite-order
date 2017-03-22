<template>
  <div class="panel">
    <div class="panel-block">
      <p class="control has-icon">
        <input class="input is-small" type="text" v-model="search" @input="makeSearch" />
        <span class="icon is-small"><vf-icon icon="search" fixed></vf-icon></span>
      </p>
    </div>
    <div class="panel-block selected-groups" v-if="groupsSelected.length">
      <div v-for="group in groupsSelected" :key="group['.key']">
        <span class="tag is-small">
          <span class="selected-group-name">{{group.name}}</span>
          <button class="delete is-small" @click="e => {unselectGroup(group, e)}"></button>
        </span>
      </div>
    </div>
    <a class="panel-block" v-for="group in groups" :key="group['.key']" @click="e => {selectGroup(group, e)}">{{group.name}}</a>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'group-list',
  data () {
    return {
      search: ''
    }
  },
  beforeMount () {
    this.loadGroupsList()
  },
  computed: {
    ...mapGetters([
      'groups',
      'groupsSelected'
    ])
  },
  methods: {
    makeSearch () {
      if (this.search.length > 2) {
        this.setGroupsFilter(this.search)
      } else if (!this.search) {
        this.clearGroupsFilter()
      }
    },
    selectGroup (group, e) {
      this.addSelectedGroup(group)
    },
    unselectGroup (group, e) {
      this.removeSelectedGroup(group)
    },
    ...mapActions([
      'loadGroupsList',
      'setGroupsFilter',
      'clearGroupsFilter',
      'addSelectedGroup',
      'removeSelectedGroup'
    ])
  }
}

</script>

<style lang="scss">
.selected-groups {
  flex-flow: row wrap;
}
.selected-group-name {
  max-width: 225px;
  overflow: hidden;
}
</style>
