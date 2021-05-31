<template lang="pug">
  #app
    component(:is='layout')
    notifications
</template>

<script>
import home from "./layouts/home"
import settings from "./layouts/settings"

export default {
  name: 'App',
  components: {
    home,
    settings
  },
  computed: {
    layout() {
      return this.$route && this.$route.meta && this.$route.meta.layout ?
        this.$route.meta.layout : ''
    }
  },
  mounted() {
    this.$root.$on('notify', text => {
      this.$notify({
        text,
        type: 'error'
      })
    })
  }
}
</script>

<style lang="scss">

</style>
