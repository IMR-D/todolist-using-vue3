<template>
  <button :type="type" :disabled="disabled" class="btn">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "AppBtn",
  props: {
    type: {
      type: String,
      default: 'button'
    },
    disabled:{
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
.btn{


}
</style>