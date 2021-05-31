<template lang="pug">
  nav
    router-link(
      v-for='(link, index) in links'
      :key='index'
      :to='link.url'
      exact
    ) {{ link.name }}
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    links: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
  nav {
    padding-left: 10px;
    a{
      display: block;
      margin-bottom: 10px;
      text-decoration: none;
      border-bottom: 1px solid $black;
      color: $main;
    }
  }
</style>