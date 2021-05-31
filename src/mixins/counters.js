export default {
  methods: {
    counters() {
      return this.$store.getters.GET_COUNTERS
    }
  }
}