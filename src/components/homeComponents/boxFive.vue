<template>
<div class="box-five flex flex-col justify-center items-center bg-black pt-16 text-white">
    <div class="flex justify-center text-5xl font-bold">
		<span>Faq</span>
	</div>
	<div class="flex justify-center mt-8">
		<span>Sample text. Click to select the text box. Click again or double click to start editing the text.</span>
	</div>
	<div class="flex flex-col mt-6">
		<accordion></accordion>
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
        return {};
    },
    methods: {},
    computed: {},
    watch: {},
};
</script>

<style></style>
