//import { pultService } from '@/modules/pult/pult.service'

const pultDashboard = {
	namespaced: true,
	state: {
		images: null,
		image: null,
		activeOverlay: false,
		showModal: false,
		modalData: {
			name: null,
			data: null
		},
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
		setModalData: (state, payload) => {
			state.modalData.name = payload.modalName
			state.modalData.data = payload.modalData;
		},
	},
	actions: {
		openImages() {
		},
	},
};

export default pultDashboard;
