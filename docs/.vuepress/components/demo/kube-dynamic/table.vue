<template>
    <kube-dynamic-block
        v-model="model"
        style="width: 100%;"
        :data-template="getDataTemplate"
    >
     <template slot="column">
        <th>A</th>
        <th>B</th>
        <th>C</th>
    </template>
    <template slot-scope="{ model: row, index }">
        <td>
            <u-input v-model="row.a" />
        </td>
        <td>
            <u-input v-model="row.b" />
        </td>
        <td>
            <u-input v-model="row.c" />
        </td>
    </template>
    </kube-dynamic-block>
</template>

<script>
import kubeDynamicBlock from '@kubecube/common/kube-dynamic-block.vue'
import { makeVModelMixin } from '@kubecube/mixins/functional';
export default {
    mixins: [ makeVModelMixin ],
    components: {
        'kube-dynamic-block': kubeDynamicBlock
    },
    methods: {
        getDataTemplate() {
            return {
                a: '',
                b: '',
                c: ''
            }
        }
    }
}
</script>

<style>

</style>