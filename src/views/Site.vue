<template lang="pug">
  div.about
    h1 Site - {{ count.site }}
</template>

<script>
// @ is an alias to /src
import counters from "../mixins/counters";

export default {
  name: 'Site',
  data() {
    return {
      count: 0
    }
  },
  mixins: [counters],
  mounted() {
    this.$store.commit('UPDATE_COUNTERS', 'site')
    this.count = this.counters()
    this.$root.$emit('notify', 'Site')
  }
}
</script>