import Vue from "vue";
import Vuex from "vuex";
//stores
import home from './Home/home'

Vue.use(Vuex);

let storeInstance = new Vuex.Store({
	modules: {
		// home
		home,
	},
	state: {
		toggleNavigation: true,
	},

	getters: {
		getState: (state) => (prop) => {
			return state[prop];
		  },
	},

	mutations: {
		setState: (state, { prop, value }) => {
			state[prop] = value;
		  },
	},

	actions: {},
});

export default storeInstance;
