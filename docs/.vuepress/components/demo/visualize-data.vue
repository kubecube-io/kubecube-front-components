<template>
  <div :class="$style.root">
      <div>
          实时数据观测：
      </div>
      <demo-visualize-data-span :data="model" curr-level-text="root" />
  </div>
</template>

<script>
import { makeVModelMixin } from '@kubecube/mixins/functional';
export default {
    name: 'demo-visualize-data',
    mixins: [makeVModelMixin],
    
}
</script>

<style module>
.root{
    border: 1px solid #ebf0f5;
    padding: 10px;
}
</style>