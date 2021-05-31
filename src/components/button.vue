<template lang="pug">
  button {{ title }}
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: 'Button'
    }
  }
}
</script>

<style lang="scss">
  button {
    min-width: 120px;
    width: min-content;
    padding: 0 10px;
    height: 30px;
    background: $main;
    border: none;
    color: $white;
    cursor: pointer;
    white-space: nowrap;
  }
</style>