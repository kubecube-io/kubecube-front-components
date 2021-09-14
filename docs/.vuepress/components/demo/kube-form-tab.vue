<template>
<div>
  <kube-tab
    v-model="tabs"
    :data-template="getDefault"
    >
    <template slot-scope="{ model: row, errorPrefix }">
         <u-form label-size="small" style="margin-top: 20px">
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
  </kube-tab>
  <demo-visualize-data v-model="tabs" />
</div>
</template>

<script>
import kubeTab from '@kubecube/common/kube-form-tab/index.vue'
export default {
    components: {
        kubeTab
    },
    data() {
        return {
            tabs: [],
        }
    },
    methods: {
        getDefault() {
            return {
                a: '',
                b: '',
                c: '',
            }
        }
    }
}
</script>

<style>

</style>