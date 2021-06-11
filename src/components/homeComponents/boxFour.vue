<template>
<div class="box-four flex flex-col md:flex-row justify-center items-center bg-black w-full pt-16">
    <div class="flex w-full flex-col md:flex-row md:w-8/12">
		<div class="flex flex-col md:w-1/2 px-10 md:px-0 pt-16">
			<span class="text-white text-3xl font-bold text-left mb-4">The Best Car Insurance Companies for 2021</span>
			<span class="text-white text-xl text-left underline">We looked at claims processes, transparency, complaints and more to find and rank the best car insurance companies.</span>
			<span class="text-white bg-orange p-2 text-left my-4">Many or all of the products featured here are from our partners who compensate us. This may influence which products we write about and where and how the product appears on a page. However, this does not influence our evaluations. Our opinions are our own.</span>
			<span class="text-white text-left">The best car insurance companies give their customers more than just coverage they want at a reasonable price — merely good companies can do that. On top of that, the best auto insurance companies provide a customer-first experience from quote to claim, including a headache-free way to manage policies and make payments.</span>
		</div>
		<div class="flex md:w-1/2 image-box">
			<div class="img-wrapper">
				<img class="image" src="../../assets/images/car2.jpeg">
			</div>
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
// .milos-img {
// 	height: 30rem;
// 	width: 30rem;
// 	overflow: hidden;
// 	.scale-img{
// 		transition: .4s;
// 		height: 100%;
// 		width: 100%;
// 		&:hover{
// 			transform: scale(1.2);
// 		}
// 	}
// }

.image{
    height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 100%;
	padding: 5rem;
}

.image-box{
	padding-bottom: 50%;
	height: 100%;
	position: relative;

	.img-wrapper{
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
	}
}

$breakpoint-tablet: 768px;
@media (max-width: $breakpoint-tablet) {
	.image-box{
		padding-bottom: 100%;
	}
	.image{
		padding: 2.5rem;
	}
}
</style>
