<template lang="pug">
  div.home
    h1 Home - {{ count.home }}
</template>

<script>
// @ is an alias to /src
import counters from "../mixins/counters";

export default {
  name: 'Home',
  data() {
    return {
      count: 0
    }
  },
  mixins: [counters],
  mounted() {
    this.$store.commit('UPDATE_COUNTERS', 'home')
    this.count = this.counters()
    this.$root.$emit('notify', 'Home')
  }
}
</script>
