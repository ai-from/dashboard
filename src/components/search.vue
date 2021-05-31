<template lang="pug">
  .search
    input(
      type='text'
      @click.self='isList = !isList'
      placeholder='Search'
    )
    .list(v-show='isList')
      router-link(
        v-for='(link, index) in links'
        :key='index'
        :to='link.url'
        exact
      )
        div(@click='isList = false') {{ link.name }}
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      isList: false
    }
  },
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.search {
  width: 200px;
  position: relative;
  justify-self: center;
  input {
    width: 100%;
    height: 30px;
  }
  .list {
    position: absolute;
    left: 0;
    top: calc(100% + 1px);
    width: inherit;
    background: $main;
    padding: 10px;
    a {
      display: block;
      margin-bottom: 5px;
      text-decoration: none;
      color: $white;
    }
  }
}
</style>