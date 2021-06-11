<template>
<div class="image-slider-modal w-full h-screen flex flex-row wrapper relative text-tiny text-theme-gray">
    <div
        class="flex flex-col justify-center w-1/12 bg-black opacity-50 hover:opacity-100"
        @click="decrementPicture(image.id)"
    >
        <i class="fa fa-arrow-left text-white text-2xl" aria-hidden="true"></i>
    </div>
    <div class="flex flex-col w-10/12">
        <div class="flex justify-end py-3 px-16">
            <i class="fa fa-times text-white text-2xl close-icon text-white cursor-pointer"
                aria-hidden="true" @click="$emit('closeModal')" />
        </div>
        <div class="flex flex-grow">
            <img
	    		class="object-cover w-full py-5 md:px-32 bg-theme-grayLight"
                :src="require(`../../../assets/images/${image.src}.jpeg`)"
	    	>
        </div>
    </div>
    <div
        class="flex flex-col justify-center w-1/12 bg-black opacity-50 hover:opacity-100"
        @click="incrementPicture(image.id)"
    >
        <i class="fa fa-arrow-right text-white text-2xl" aria-hidden="true"></i>
    </div>
</div>
</template>

<script>
import ModalMixin from "../../../mixins/ModalMixin";
export default {
    props: ['model'],
    data() {
        return {
            image: this.model.curentImg,
        };
    },

    mixins: [ModalMixin],
    mounted() {
    },
    methods: {
        incrementPicture(id) {
            if(id < Object.keys(this.model.images).length) {
                this.image = this.model.images[id];
                return;
            }
            this.image = this.model.images[0];
        },
        decrementPicture(id) {
            if(id === 1) {
                let maxLen = Object.keys(this.model.images).length -1;
                this.image = this.model.images[maxLen];
                return;
            }
            let decrementedId = id - 2;
            this.image = this.model.images[decrementedId];
        }
    },
    computed: {},
    watch: {}
};
</script>

<style>
</style>
