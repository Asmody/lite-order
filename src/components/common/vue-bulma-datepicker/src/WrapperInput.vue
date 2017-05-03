<template>
  <div class="field has-addons">
    <p class="control is-expanded flatpickr" data-wrap="true" data-clickOpens="false" :class="{ [`has-addons-${alignment}`]: alignment }">
      <input class="input" :class="inputClass" type="date" :placeholder="placeholder" :readonly="readonly" v-model="date" data-input/>
    </p>
    <slot></slot>
  </div>
</template>

<script>
import BaseInput from './BaseInput'

export default {
  mixins: [BaseInput],

  props: {
    readonly: Boolean
  }
}
</script>
