<template>
<div>
    <kube-tree
        v-model="rules"
        title="示例树"
    />
    <demo-visualize-data v-model="rules" />
</div>
</template>

<script>
export default {
    data() {
        return {
            rules: {
                a: {
                    b: {
                        c: true,
                        d: false,
                    },
                    e: {
                        f: true
                    },
                    g: false
                },
            }
        }
    }
}
</script>

<style>

</style>