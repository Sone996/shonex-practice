<template>
  <div class="home-header w-full h-screen">
    <header-search></header-search>
    <header-content></header-content>
  </div>
</template>

<script>
import headerSearch from './headerSearch';
import headerContent from './headerContent';
  export default {
    name: 'home-header',
    components: {
      headerSearch,
      headerContent,
    },
    data() {
      return {};
    },
    methods: {},
    computed: {},
    watch: {},
  };
</script>

<style>
.home-header{
  background: url("../../assets/images/header-image.jpeg") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
