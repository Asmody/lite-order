<template>
  <div id="groups" class="groups">
    <div class="groups-header">
      <div class="border-box">
        <p class="control has-icon">
          <input class="input is-small" type="text" v-model="search" @input="makeSearch" />
          <span class="icon is-small"><vf-icon icon="search" fixed></vf-icon></span>
        </p>
      </div>
      <div class="selected-groups border-box" v-if="groupsSelected.length">
        <div v-for="group in groupsSelected" :key="group.id">
          <span class="tag is-small is-primary">
            <span class="selected-group-name">{{group.name}}</span>
            <button class="delete is-small" @click="e => {unselectGroup(group, e)}"></button>
          </span>
        </div>
      </div>
    </div>
    <div class="groups-list">
      <ul>
        <li class="border-box" v-for="group in groups" :key="group.id" @click="e => {selectGroup(group, e)}">{{group.name}}</li>
      </ul>
    </div>
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
.border-box{
  border: 1px solid #dbdbdb;
  padding: 0.5rem;
}
.border-box:not(:last-child){
  border-bottom: none;
}

.groups{
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  > *{
    flex: 0 0 auto;
  }
  &-header{
    margin: 0;
  }
  &-list{
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    ul{
      list-style: none;
      li{
        overflow: hidden;
        cursor: pointer;
      }
    }
  }
}
.selected-groups {
  flex-flow: row wrap;
}
.selected-group-name {
  max-width: 225px;
  overflow: hidden;
}
</style>
