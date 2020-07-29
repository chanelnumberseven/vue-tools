<template>
  <td class="td">
    <slot></slot>
  </td>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.td {
  padding:.4em;
  font-size:16px;
  color:#646464;
  background-color:#fff;
  border: 1px solid rgba(205, 209, 223, 1);
}
</style>
