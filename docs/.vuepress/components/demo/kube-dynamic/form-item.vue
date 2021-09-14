<template>
<div>
    <kube-table-dynamic v-model="demos"/>
    <br />
    <kube-block-dynamic v-model="demob"/>
    <demo-visualize-data v-model="combined" />
</div>
</template>

<script>
import table from './table.vue';
import block from './block.vue';
export default {
    components: {
        'kube-table-dynamic': table,
        'kube-block-dynamic': block,
    },
    data() {
        return {
            demos: [],
            demob: [],
        }
    },
    computed: {
        combined() {
            return {
                demos: this.demos,
                demob: this.demob,
            }
        }
    }
}
</script>

<style>

</style>