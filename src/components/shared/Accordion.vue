<template>
<div class="accordion text-white flex justify-center">

    <div class="row">
        <div class="col">
            <h2>Open <b>multiple</b></h2>
            <div class="tabs">
                <div class="tab">
                    <input type="checkbox" id="chck1">
                    <label class="tab-label" for="chck1">Item 1</label>
                    <div class="tab-content">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!
                    </div>
                </div>
                <div class="tab">
                    <input type="checkbox" id="chck2">
                    <label class="tab-label" for="chck2">Item 2</label>
                    <div class="tab-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    name: 'accordion',
    components: {},
    data() {
        return {};
    },
    methods: {},
    computed: {},
    watch: {},
};
</script>

<style lang='scss' scoped>
$midnight: #2c3e50;
$clouds: #ecf0f1;
// General
// body {
//   color: $midnight;
//   background: $clouds;
//   padding: 0 1em 1em;
// }
// h1 {
//   margin: 0;
//   line-height: 2;
//   text-align: center;
// }
// h2 {
//   margin: 0 0 .5em;
//   font-weight: normal;
// }
input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
// Layout
.row {
  display:flex;
  .col {
    flex:1;
    &:last-child {
      margin-left: 1em;
    }
  }
}
/* Accordion styles */
.tabs {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
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
      transition: all .35s;
    }
  }
  &-content {
    max-height: 0;
    padding: 0 1em;
    color: $midnight;
    background: white;
    transition: all .35s;
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
  + .tab-label {
    background: darken($midnight, 10%);
    &::after {
      transform: rotate(90deg);
    }
  }
  ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }
}

</style>
