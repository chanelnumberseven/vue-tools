<template>
  <div class="layout-tr" :class="{center:center,column:column,spacing:spacing,strench:strench}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    center: Boolean,
    column: Boolean,
    spacing: Boolean,
    strench:Boolean
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.layout-tr {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &.center {
    justify-content: center;
  }
  .column {
    flex-direction: column;
  }
  &.strench{
    align-items: stretch;
  }
  &.spacing {
    ::v-deep >.layout-td {
      padding-right: $panelSpacing;
      padding-top: $panelSpacing;
    }
  }
}
</style>
