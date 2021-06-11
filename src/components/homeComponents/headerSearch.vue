<template>
  <div class="header-search flex flex-col md:flex-row border border-white py-4 justify-center md:justify-around">
        <div class="">
            <input type="text" />
        </div>
        <div class="text-white" @click="toggleNavigation(!navState)">menu</div>
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
