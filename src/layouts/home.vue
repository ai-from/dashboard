<template lang="pug">
  #main-layout
    v-header(:links='links')
    v-navigation(:links='links')
    v-workarea
</template>

<script>
import header from "../components/header"
import navigation from "../components/navigation"
import workarea from "../components/workarea"
export default {
  name: 'Home',
  components: {
    'v-header': header,
    'v-navigation': navigation,
    'v-workarea': workarea
  },
  computed: {
    links() {
      return this.$store.getters.GET_LINKS_HOME
    }
  },
  mounted() {
    this.$root.$emit('breadcrumbs')
  }
}
</script>

<style lang="scss">
  #main-layout {
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: min-content 1fr;
    grid-gap: 20px;
    header {
      grid-column: 1/3;
      grid-row: 1/2;
    }
    nav {
      grid-column: 1/2;
      grid-row: 2/3;
    }
    .workarea {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }
</style>