<template>
  <div id="app" class="relative w-full h-full" :class="!navState ? 'overflow-hidden' : null">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data() {
      return {
      };
    },
    methods: {
    },
    computed: {
        navState() {
            return this.$store.getters['getState']('toggleNavigation');
        }
    },
    watch: {},
  };
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* scrollbar */

::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
    border-radius: 50px;
    scrollbar-box-shadow: inset 0 0 2px grey;
    scrollbar-border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb {
    background: #d4d4d4;
    border-radius: 50px;
    scrollbar-background: #d4d4d4;
    scrollbar-border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
    scrollbar-background: gray;
  }
</style>


// install scss and bable