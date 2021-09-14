<template>
    <kube-dynamic-block
        v-model="model"
        style="width: 100%;"
        :layout-comp="blockLayout"
        :row-comp="blockRowLayout"
        :column-comp="null"
        :data-template="getDataTemplate"
        button-name="添加镜像仓库配置"
    >
        <template slot-scope="{ model: row, index }">
            <u-form label-size="small">
                <u-form-item label="a">
                    <u-input v-model="row.a" />
                </u-form-item>
                <u-form-item label="b">
                    <u-input v-model="row.b" />
                </u-form-item>
                <u-form-item label="c">
                    <u-input v-model="row.c" />
                </u-form-item>
            </u-form>
        </template>
    </kube-dynamic-block>
</template>

<script>
import kubeDynamicBlock from '@kubecube/common/kube-dynamic-block.vue'
import { makeVModelMixin } from '@kubecube/mixins/functional';
import blockLayout from '@kubecube/common/kube-dynamic-block-layout/index.vue';
import blockRowLayout from '@kubecube/common/kube-dynamic-block-layout/row.vue';

export default {
    mixins: [ makeVModelMixin ],
    components: {
        'kube-dynamic-block': kubeDynamicBlock
    },
    data() {
        return {
            blockLayout,
            blockRowLayout,
        };
    },
    methods: {
        getDataTemplate() {
            return {
                a: '',
                b: '',
                c: '',
            };
        },
    },
}
</script>

<style>

</style>