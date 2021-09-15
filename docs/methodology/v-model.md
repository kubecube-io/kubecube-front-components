# v-model Everything

对象保持与组件状态绑定，形成数据和组件的映射。

### use case
```vue
<template>
<div>
    <kube-table-dynamic v-model="demos"/>
</div>
</template>

<script>
import table from './table.vue';
export default {
    components: {
        'kube-table-dynamic': table,
    },
    data() {
        return {
            demos: [],
        }
    },
}
</script>
```

### makeVModelMixin
<<< @/kube-components/mixins/functional.js

### table.vue
<<< @/docs/.vuepress/components/demo/kube-dynamic/table.vue