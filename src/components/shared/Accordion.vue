<template>
<div class="accordion text-white flex justify-center">
    <div class="row">
        <div class="col">
            <div class="tabs" v-for="(obj, index) in model" :key="index">
				<div class="tab">
                    <input type="checkbox" :id="`chck${index}`" />
                    <label class="tab-label" :for="`chck${index}`">{{obj.title}}</label>
                    <div class="tab-content">{{obj.text}}</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "accordion",
    components: {},
    data() {
        return {
		};
    },
	props: {
		model: {
			require: false,
            type: Array | Object,
		}
	},
    methods: {},
    computed: {},
    watch: {},
};
</script>

<style lang="scss" scoped>
$midnight: #2c3e50;
$clouds: #ecf0f1;


input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

// Layout
.row {
    display: flex;

    .col {
        flex: 1;

        &:last-child {
            //margin-left: 1em;
        }
    }
}

/* Accordion styles */
.tabs {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
}

.tab {
    width: 100%;
    color: white;
    overflow: hidden;

    &-label {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        background: $midnight;
        font-weight: bold;
        cursor: pointer;

        /* Icon */
        &:hover {
            background: darken($midnight, 10%);
        }

        &::after {
            content: "\276F";
            width: 1em;
            height: 1em;
            text-align: center;
            transition: all 0.35s;
        }
    }

    &-content {
        max-height: 0;
        padding: 0 1em;
        color: white;
        background: black;
        transition: all 0.35s;
    }

    &-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        background: $midnight;
        cursor: pointer;

        &:hover {
            background: darken($midnight, 10%);
        }
    }
}

// :checked
input:checked {
    +.tab-label {
        // background: darken($midnight, 10%);
		background: #f17c0e;

        &::after {
            transform: rotate(90deg);
        }
    }

    ~.tab-content {
        max-height: 100vh;
        padding: 1em;
    }
}
</style>
