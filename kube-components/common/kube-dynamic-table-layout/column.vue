<template>
  <tr
    :class="$style.root"
    topAlign
  >
    <slot />
    <th
      v-if="!hideClose"
      :class="$style.formTd"
    />
  </tr>
</template>

<script>
export default {
    props: {
        hideClose: Boolean,
    },
};
</script>

<style module>
.root[topAlign] {
    vertical-align: top;
}
.root > td {
    padding-right: 10px;
}

.root.static td:nth-last-child(2) {
    padding-right: 0;
}
.formTd {
    position: relative;
    width: 57px;
    padding: 0;
}


</style>
