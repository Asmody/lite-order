<template>
  <p class="control has-addons">
    <input v-model="search" class="input" type="text" placeholder="код или наименование" />
    <button class="button">
      <vf-icon icon="search" fixed />
    </button>
  </p>
</template>

<script>
export default {
  name: 'quick-search',
  data () {
    return {
      search: ''
    }
  },
  methods: {

  }
}
</script>
