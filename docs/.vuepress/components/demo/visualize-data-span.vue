<template>
  <div>
    <div @click="spand = !spand" :class="$style.root">
        <i-icon
            v-if="keys.length !== 0"
            size="small"
            :name="spand ? 'arrow-down' : 'arrow-right'"
        />
        <span v-else :class="$style.holder"/>
      <u-text>{{ currLevelText }}</u-text>
      <u-text>:</u-text>
      <u-text v-if="keys.length === 0">{{ data }}</u-text>
    </div>
    <div :class="$style.nextLevel" v-if="spand">
        <template v-for="k in keys">
            <demo-visualize-data-span
                :key="k"
                :data="data[k]"
                :curr-level-text="k"
            />
        </template>
    </div>
  </div>
</template>

<script>
export default {
    name: 'demo-visualize-data-span',
    props: {
        data: [ Object, String, Number, Boolean, Array, Function ],
        currLevelText: String,
        dataKey: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            spand: true,
        }
    },
    computed: {
        keys() {
            if(Array.isArray(this.data)) {
                return new Array(this.data.length).fill(0).map((_, idx) => `${idx}`);
            }
            if(this.data !== null && typeof this.data === 'object') {
                return Object.keys(this.data);
            }
            return [];
        },
    }
}
</script>

<style module>
.root {
    cursor: pointer;
}
.holder {
    display: inline-block;
    width: 1em;
}
.nextLevel{
    padding-left: 20px;
}
</style>