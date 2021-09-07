<template>
  <input type="text" :value="valueOfInput"  :placeholder="placeholder" @input="$emit('update:valueOfInput', $event.target.value)" class="input">
</template>

<script>
export default {
  name: "AppInput",
  props: {
    valueOfInput: String,
    placeholder: String
  }

}
</script>

<style lang="scss" scoped>
.input{
  height: 3rem;
  font-size: 1.5rem;
  padding: 0 0.75rem;
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