<template>
  <div class="box-seven flex md:flex-col justify-center items-center bg-black w-full pt-16 px-4">
    <div class="flex flex-col md:flex-row justify-center md:w-8/12">
    	<div class="flex flex-col md:w-1/2 text-left px-4 md:pr-4 pt-8 pb-16 text-white">
    		<span>Ready to talk?</span>
    		<span class="text-4xl font-bold mb-5">Contact Us</span>
    		<span>
    			Massa tempor nec feugiat nisl pretium fusce id velit. Accumsan tortor
    			posuere ac ut. Aenean pharetra magna ac placerat vestibulum lectus.
    			Praesent semper feugiat nibh sed pulvinar. Lorem sed risus ultricies
    			tristique.
    			<br /><br />
    			Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Amet
    			dictum sit amet justo donec enim diam vulputate. Ut morbi tincidunt
    			augue interdum velit euismod in pellentesque. Volutpat lacus laoreet
    			non curabitur.
    		</span>
    	</div>
    	<div class="flex flex-col md:w-1/2 md:px-16">
			<input
				class="bg-black border-b border-white p-2 text-white mb-4"
				placeholder="Enter your Name"
				type="text"
			/>
			<input
				class="bg-black border-b border-white p-2 text-white mb-4"
				placeholder="Enter a valid email adress"
				type="text"
			/>
			<textarea
				class="bg-black border-b border-white p-2 text-white mb-4"
				cols="30"
				rows="5"
				placeholder="Enter your message"
			></textarea>
			<div class="border-2 rounded-full py-3 px-6 border-orange text-orange md:w-1/2 xl:w-1/4 mb-4">Submit</div>
			<div class="flex py-2 px-2">
				<i class="fa fa-facebook text-orange text-2xl mx-2" aria-hidden="true"></i>
				<i class="fa fa-twitter text-orange text-2xl mx-2" aria-hidden="true"></i>
				<i class="fa fa-instagram text-orange text-2xl mx-2" aria-hidden="true"></i>
			</div>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "box-seven",
  components: {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style></style>
