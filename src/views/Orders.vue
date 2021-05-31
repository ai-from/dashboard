<template lang="pug">
  div.orders
    h1 Orders - {{ count.orders }}
</template>

<script>
// @ is an alias to /src
import counters from "../mixins/counters";

export default {
  name: 'Orders',
  data() {
    return {
      count: 0
    }
  },
  mixins: [counters],
  mounted() {
    this.$store.commit('UPDATE_COUNTERS', 'orders')
    this.count = this.counters()
    this.$root.$emit('notify', 'Orders')
  }
}
</script>