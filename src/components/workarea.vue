<template lang="pug">
  .workarea
    v-breadcrumbs
    router-view
</template>

<script>
import breadcrumbs from "./breadcrumbs";
export default {
  name: 'Workarea',
  components: {
    'v-breadcrumbs': breadcrumbs
  }
}
</script>

<style lang="scss">
  .workarea {
    padding-right: 10px;
  }
</style>