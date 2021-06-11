<template>
<div class="box-one flex flex-col justify-center bg-black w-full pt-16">
    <span class="text-4xl text-white font-bold mb-4">Insurance and investing for your many sides</span>
    <span class="text-white">We've been protecting people, businesses and futures for more than 90 years.</span>
    <div class="flex flex-col md:flex-row justify-center mt-8">
        <news-with-picture
            icon="fa-users"
            title="For you and your family"
            content="We protect vehicles, property, pets and events."
        ></news-with-picture>
        <news-with-picture
            icon="fa-mobile"
            title="For your business"
            content="We protect businesses and employees, as well as company property and vehicles."
        ></news-with-picture>
        <news-with-picture
            icon="fa-lightbulb-o"
            title="For your future"
            content="We protect investments, retirements and financial dreams."
        ></news-with-picture>
    </div>
</div>
</template>

<script>
import newsWithPicture from './newsWithPicture';
export default {
    name: 'box-one',
    components: {
        newsWithPicture
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
