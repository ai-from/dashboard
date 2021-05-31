<template lang="pug">
  .breadcrumbs {{ path }}
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data() {
    return {
      path: ''
    }
  },
  watch: {
    $route: {
      handler(newOne, oldOne) {
        this.path = this.$route.meta.breadcrumbs
      },
      deep: true
    }
  },
  mounted() {
    this.path = this.$route.meta.breadcrumbs
  }
}
</script>

<style lang="scss">

</style>