<template>
  <div class="scroll-table">
    <div class="scroll-table-caption">
      <slot name="tcaption"></slot>
    </div>
    <div class="scroll-table-header">
      <table :class="tClass">
        <slot name="thead">
        </slot>
      </table>
    </div>
    <div class="scroll-table-body">
      <table :class="tClass">
        <slot>
        </slot>
      </table>
    </div>
    <div class="scroll-table-footer">
      <table :class="tClass">
        <slot name="tfoot">
        </slot>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'scroll-table',
  props: ['tClass']
}

</script>

<style lang="scss" scoped>
.scroll-table{
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  table{
    margin: 0;
  }
  > *{
    flex: 0 0 auto;
    overflow: auto;
  }
  &-caption{
  }
  &-header{
  }
  &-body{
    flex: 1 1 auto;
    display: flex;
    overflow: auto;
  }
  &-footer{
  }
}
</style>
