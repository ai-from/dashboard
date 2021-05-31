<template lang="pug">
  div.users
    h1 Users - {{ count.users }}
</template>

<script>
// @ is an alias to /src
import counters from "../mixins/counters";

export default {
  name: 'Users',
  data() {
    return {
      count: 0
    }
  },
  mixins: [counters],
  mounted() {
    this.$store.commit('UPDATE_COUNTERS', 'users')
    this.count = this.counters()
    this.$root.$emit('notify', 'Users')
  }
}
</script>