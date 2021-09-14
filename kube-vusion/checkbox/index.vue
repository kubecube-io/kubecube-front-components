<template>
  <div>
    <input
      v-model="model"
      type="checkbox"
      @change="onChange"
    >
    xxxx
  </div>
</template>

<script>
export default {
    name: 'UCheckbox',
    model: {
        event: 'change',
        prop: 'value',
    },
    props: {
        value: {
            type: [ String, Number, Boolean, Array, Object ],
            require: true,
        },
    },
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('change', val);
            },
        },
    },
    methods: {
        onChange(event) {
            console.log(event);
            this.$emit('check', event);
        },
    }
};
</script>

<style>

</style>