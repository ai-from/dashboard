<template lang="pug">
  div.groups
    h1 Groups - {{ count.groups }}
</template>

<script>
// @ is an alias to /src
import counters from "../mixins/counters";

export default {
  name: 'Groups',
  data() {
    return {
      count: 0
    }
  },
  mixins: [counters],
  mounted() {
    this.$store.commit('UPDATE_COUNTERS', 'groups')
    this.count = this.counters()
    this.$root.$emit('notify', 'Groups')
  }
}
</script>