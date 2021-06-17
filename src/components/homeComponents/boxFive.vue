<template>
<div class="box-five flex flex-col justify-center items-center bg-black pt-16 text-white px-4 lg:px-16">
    <div class="flex justify-center text-5xl font-bold">
		<span>Faq</span>
	</div>
	<div class="flex justify-center mt-8">
		<span>Sample text. Click to select the text box. Click again or double click to start editing the text.</span>
	</div>
	<div class="flex flex-col mt-6 2xl:w-1/2">
		<accordion :model="model"></accordion>
	</div>
</div>
</template>

<script>
import accordion from '../shared/Accordion';
export default {
    name: 'box-five',
    components: {
		accordion,
	},
    data() {
        return {
			model: [
				{
					title: "What's included in the quoted daily rate?",
					text: 'Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.',
				},
				{
					title: "What is the rental's mileage plan?",
					text: "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
				},
				{
					title: "What are your extra insurance options?",
					text: "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
				},
				{
					title: "Do I need to return the rental with a full tank?",
					text: "Answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum iaculis sit amet.",
				},
			]
		};
    },
    methods: {},
    computed: {},
    watch: {},
};
</script>

<style></style>
