<template>
    <div class="main-layout bg-theme-2 flex h-screen relative">
        <div class="absolute t-0 l-0 h-full opacity-75 w-1/2 md:w-2/12" :class="navState ? 'hidden' : 'absolute'">
            <div class="flex flex-col h-full bg-black justify-between">
                <div class="flex justify-end">
                    <span 
                        @click="colapseMenu(!navState)"
                        class="text-white text-xl px-4 py-4 cursor-pointer"
                    >X</span>
                </div>
                <div class="flex flex-col">
                    <span class="text-white">Home</span>
                    <span class="text-white">Home</span>
                    <span class="text-white">Home</span>
                </div>
                <div class="flex"></div>
            </div>
        </div>
        <div class="h-full w-full flex-flex-col">
            <router-view />
        </div>
    </div>
</template>

<script>
  export default {
    name: 'main-layout',
    components: {},
    data() {
      return {
      };
    },
    methods: {
        colapseMenu(navState) {
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
