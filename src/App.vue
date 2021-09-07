<template>
  <h1>ToDo App</h1>
  <section aria-label="Create todo" class="section">
    <form @submit.prevent="handlerSubmit" class="section__form">
      <AppInput v-model:valueOfInput="valueOfInput"  placeholder="Enter title of task" class="section__form-input"/>
      <AppTextArea v-model:valueOfTextArea="valueOfTextArea" placeholder="Enter description of task" tabindex="0" maxlength="100"  class="section__form-text-area"/>
      <AppBtn type="submit" :disabled="!(!!valueOfInput && !!valueOfTextArea)"  class="section__form-btn"> Add </AppBtn>
    </form>
  </section>
  <TodoSection v-if="todoList.length" >
    <TodoList :todo-list="todoList" class="todolist"/>
  </TodoSection>
</template>

<script>
import { ref } from 'vue'
import AppInput from "@/components/ui-kit/AppInput";
import AppBtn from "@/components/ui-kit/AppBtn";
import { onSubmit } from "@/composables/onSubmit";
import TodoSection from "@/components/todo/todoSection/TodoSection";
import TodoList from "@/components/todo/todoList/TodoList";
import AppTextArea from "@/components/ui-kit/AppTextArea";
export default {
  name: 'App',
  components: {AppTextArea, TodoList, TodoSection, AppBtn, AppInput},
  setup(){
    const valueOfInput = ref('')
    const valueOfTextArea = ref('')
    const { addingTodo, todoList } = onSubmit()
    function handlerSubmit(){
      addingTodo(valueOfInput,valueOfTextArea)
      valueOfInput.value = ''
      valueOfTextArea.value = ''
    }
    return {
      valueOfInput,
      valueOfTextArea,
      addingTodo,
      todoList,
      handlerSubmit,
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
.section{
  width: 100%;
  display: flex;
  justify-content: center;
   &__form{
     display: flex;
     flex-direction: column;
     width: 50%;

    }
  &__form-input{ }
  &__form-text-area{ }
  &__form-btn{
    height: 3rem;
    font-size: 1.5rem;
  }
}
.todolist{
  background: grey;
  display: flex;
}
</style>
