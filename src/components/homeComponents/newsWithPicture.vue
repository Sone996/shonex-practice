<template>
  <div class="news-with-picture flex flex-col justify-between items-center md:w-2/12 p-4">
      <div class="rounded-full h-16 w-16 flex items-center justify-center bg-orange">
          <i class="fa text-white text-3xl" :class="icon" aria-hidden="true"></i>
      </div>
      <div class="flex">
        <span class="text-white text-2xl font-bold text-center">{{title}}</span>
      </div>
      <div class="flex flex-grow">
        <span class="text-gray-400">{{content}}</span>
      </div>
      <div class="border-2 rounded-xl border-orange text-orange py-1 px-2">Read more</div>
  </div>
</template>

<script>
  export default {
    name: 'news-with-picture',
    components: {},
    data() {
      return {};
    },
    props: {
        icon: {
            require: false,
            type: String | null,
        },
        title: {
            require: true,
            type: String | null,
        },
        content: {
            require: true,
            type: String | null,
        }
    },
    methods: {},
    computed: {},
    watch: {},
  };
</script>

<style lang="scss" scoped>
  .miki {
    position: relative;
    &::before{
      content: 'peraaaaa';
      position: absolute;
      color: white;
      opacity: 0;
      left: 0;
      bottom: 0;
      width: 0;
      height: 3px;
      background-color: blue;
      transition: .4s;
    }
    &:hover{
      &::before {
        width: 100%;
        opacity: 1;
      }
    }
  }

</style>
