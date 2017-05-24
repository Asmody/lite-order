<template lang="pug">
  .scroll-table
    .scroll-table-caption
      slot(name="tcaption")
    .scroll-table-header
      table(:class="tClass")
        slot(name="thead")
    .scroll-table-body
      table(:class="tClass")
        slot
    .scroll-table-footer
      table(:class="tClass")
        slot(name="tfoot")
</template>

<script>

export default {
  name: 'scroll-table',
  props: ['tClass']
}

</script>

<style lang="sass" scoped>
.scroll-table
  display: flex
  flex: 1
  flex-direction: column
  overflow: hidden
  height: 100%
  table
    margin: 0
  > *
    flex: 0 0 auto
    overflow: none
  &-caption
  &-header
  &-body
    flex: 1 1 auto
    display: flex
    overflow: auto
  &-footer
</style>
