<template>
  <th class="th">
    <slot></slot>
  </th>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.th {
  padding:.4em;
  background: rgba(248, 251, 255, 1);
  border: 1px solid rgba(205, 209, 223, 1);
}
</style>
