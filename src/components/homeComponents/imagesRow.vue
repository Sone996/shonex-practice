<template>
<div class="images-row flex justify-center bg-black w-full pt-8">
    <div class="flex flex-col md:flex-row md:w-1/2 px-6 md:px-0">
		<div v-for="image in images" :key="image.id" class="w-full md:w-1/3">
        	<img
				class="object-cover h-48 w-full p-1 bg-theme-grayLight"
				:src="require(`../../assets/images/${image.src}.jpeg`)" height="300px"
				@click="openFull(image)"
			>
        </div>
    </div>
</div>
</template>

<script>
import ModalMixin from "../../mixins/ModalMixin";
export default {
    name: 'images-row',
    components: {},
    data() {
        return {
            images: [
                {
                    id: 1,
                    src: 'car1',
                },
                {
                    id: 2,
                    src: 'car2',
                },
				{
                    id: 3,
                    src: 'car3',
                },
            ]
        };
    },
	mixins: [ModalMixin],
    methods: {
		openFull(curentImage) {
			this.openModal('image-slider', {
				images: this. images,
				curentImg: curentImage
			})
		}
	},
    computed: {},
    watch: {},
};
</script>

<style>
</style>
