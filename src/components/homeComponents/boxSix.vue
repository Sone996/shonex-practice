<template>
<div class="box-four flex flex-col md:flex-row justify-center items-center bg-black w-full pt-16">
	<div class="flex w-full flex-col md:flex-row md:w-8/12">
		<div class="flex md:w-3/4 image-box">
			<div class="img-wrapper">
				<img class="image" src="../../assets/images/car4.jpeg">
			</div>
		</div>
		<div class="flex flex-col md:w-1/4 px-10 md:px-0 pt-16 items-center md:items-end justify-center">
			<span class="text-white text-2xl 2xl:text-3xl font-bold text-left mb-2">Safe. Relaxing.</span>
			<span class="text-white text-2xl 2xl:text-3xl font-bold text-left mb-2">Good to ride in.</span>
			<span class="text-white text-2xl 2xl:text-3xl font-bold text-left mb-2">Subtly decorated.</span>
		</div>
	</div>
</div>
</template>

<script>
export default {
    name: 'box-four',
    components: {},
    data() {
        return {};
    },
    methods: {},
    computed: {},
    watch: {},
};
</script>

<style lang="scss" scoped>
// .image{
//     height: 100%;
// 	width: 100%;
// 	object-fit: scale-down;
// 	//border-radius: 100%;
// 	padding: 5rem;
// }

// .image-box{
// 	padding-bottom: 50%;
// 	height: 100%;
// 	position: relative;

// 	.img-wrapper{
// 		position: absolute;
// 		left: 0;
// 		top: 0;
// 		height: 100%;
// 		width: 100%;
// 	}
// }

// $breakpoint-tablet: 768px;
// @media (max-width: $breakpoint-tablet) {
// 	.image-box{
// 		padding-bottom: 100%;
// 	}
// 	.image{
// 		padding: 2.5rem;
// 	}
// }
</style>