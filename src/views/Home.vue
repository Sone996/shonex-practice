<template>
<div class="home flex-grow flex w-full">
    <!-- <router-view /> -->
    <div class="flex flex-col">
        <home-header></home-header>
        <box-one></box-one>
		<box-two></box-two>
		<images-row></images-row>
        <box-three></box-three>
        <box-four></box-four>
        <box-five></box-five>
        <box-six></box-six>
        <box-seven></box-seven>
    </div>
    <!-- modals -->
    <div v-if="showModal" class="fixed top-0 left-0 modal-overlay h-screen w-screen flex" style="z-index: 30">
      <div class="flex items-center justify-center w-full">
        <component
          :is="getModalObj.name"
          :model="getModalObj.data"
          @closeModal="closeModal" />
      </div>
      <div v-if="activeOverlay" class="fixed top-0 left-0 modal-overlay h-screen w-screen flex"></div>
    </div>
</div>
</template>

<script>
import homeHeader from '../components/homeComponents/homeHeader';
import boxOne from '../components/homeComponents/boxOne';
import boxTwo from '../components/homeComponents/boxTwo';
import imagesRow from '../components/homeComponents/imagesRow';
import boxThree from '../components/homeComponents/boxThree';
import boxFour from '../components/homeComponents/boxFour';
import boxFive from '../components/homeComponents/boxFive';
import boxSix from '../components/homeComponents/boxSix.vue';
import boxSeven from '../components/homeComponents/boxSeven';

// modals
import imageSlider from "../components/homeComponents/Modals/ImageSliderModal";

export default {
    name: 'home',
    components: {
        homeHeader,
        boxOne,
        boxTwo,
		imagesRow,
        imageSlider,
        boxThree,
        boxFour,
        boxFive,
        boxSix,
        boxSeven,
    },
    data() {
        return {};
    },
    methods: {
        closeModal() {
            this.$store.commit('home/setState', {
                prop: 'showModal',
                value: false
            });
            this.$store.commit('home/setModalData', {
                modalName: null,
                modalData: null
            });
        },
    },
    computed: {
        showModal() {
            return this.$store.getters['home/getState']('showModal');
        },
        activeOverlay() {
            return this.$store.getters['home/getState']('activeOverlay');
        },
        getModalObj() {
        return this.$store.getters['home/getState']('modalData');
      },
    },
    watch: {},
};
</script>
<style scoped>
.modal-overlay{
    background-color: rgba(0, 0, 0, .9);
  }
</style>
