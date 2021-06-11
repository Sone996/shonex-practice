const ModalMixin = {
    computed: {
        getModalObj() {
            return this.$store.getters["home/getState"]('modalData');
        },
    },
    methods: {
        openModal(modalName, modalData) {
            this.$store.commit('home/setState', {
                prop: 'showModal',
                value: true
            });
            this.$store.commit('home/setModalData', {
                modalName,
                modalData
            });
        },
    }
};

export default ModalMixin;
