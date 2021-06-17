<template>
  <div class="header-search flex flex-col md:flex-row border-b border-white py-4 items-center justify-center md:justify-around">
        <div class="">
            <input class="bg-opacity-0 bg-black border border-white p-2 text-white mb-4" placeholder="Search" type="text" />
        </div>
        <div class="text-white" @click="toggleNavigation(!navState)"><i class="fa fa-bars text-2xl" aria-hidden="true"></i></div>
  </div>
</template>

<script>
  export default {
    name: 'header-search',
    components: {},
    data() {
      return {};
    },
    methods: {
        toggleNavigation(navState) {
            this.$store.commit('setState', {
                prop: 'toggleNavigation',
                value: navState
            });
        }
    },
    computed: {
        navState() {
            return this.$store.getters['getState']('toggleNavigation');
        }
    },
    watch: {},
  };
</script>

<style></style>
