<template>
  <div class="layout-td" :style="`min-width:${minWidth||width};width:${width};flex-grow:${flex}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    flex: {
      type: [String, Number],
      default:''
    },
    minWidth:{
      type:[String,Number],
      default:''
    },
    width:{
      type:[String,Number],
      default:''
    },
    coner:Boolean
  }
};
</script>
<style lang="scss" scoped>
.layout-td{
  flex:1 0 auto;
}
</style>
