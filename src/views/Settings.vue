<template lang="pug">
  div.settings
    h1(v-if='isSettings') Settings - {{ count.settings }}
    router-view(v-else)
</template>

<script>
import counters from "../mixins/counters";

export default {
  name: 'Settings',
  data() {
    return {
      count: 0
    }
  },
  computed: {
    isSettings() {
      return this.$route.path === '/settings'
    }
  },
  mixins: [counters],
  mounted() {
    this.$store.commit('UPDATE_COUNTERS', 'settings')
    this.count = this.counters()
    this.$root.$emit('notify', 'Settings')
  }
}
</script>