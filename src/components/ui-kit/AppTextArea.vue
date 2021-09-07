<template>
  <textarea  :placeholder="placeholder" :disabled="disabled" :tabindex="tabindex" :maxlength="maxlength" @input="$emit('update:valueOfTextArea', $event.target.value)" class="textarea"/>
</template>

<script>
export default {
  name: "AppTextArea",
  props:{
    valueOfTextArea:{
      type:String
    },
    placeholder:{
      type: String,
      default: 'Enter text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxlength:{
      type: Number,
      default: 999
    },
    tabindex:{
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea{
  height: 5rem;
  font-size: 1.5rem;
  padding: 0.75rem 0.75rem;
}
::placeholder{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 1.5rem;
  text-transform: capitalize;
}
</style>