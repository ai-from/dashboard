<template lang="pug">
  header.indent
    v-logo(@click.native='toHome')
    template(v-if='!isSettings')
      v-search(:links='links')
    template(v-else)
      v-button(title='Back to public part' class="public" @click.native='toHome')
    v-button(title='Exit')
</template>

<script>
import logo from "./logo";
import search from "./search";
import button from "./button";
 export default {
   name: 'Header',
   components: {
     'v-logo': logo,
     'v-search': search,
     'v-button': button
   },
   props: {
     links: {
       type: Array
     },
     isSettings: {
       type:Boolean,
       default: false
     }
   },
   methods: {
     toHome() {
       if(this.$route.path !== '/') this.$router.push('/')
     }
   }
 }
</script>

<style lang="scss">
  header {
    height: 90px;
    border-bottom: 1px solid $black;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    grid-gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    .logo {
      cursor: pointer;
    }
    .public {
      justify-self: center;
    }
  }
</style>