<template>
  <div class="todo-list">
    <TodoItem :index="index" :todo="todo" v-for="(todo,index) in todoList" :key="index" />
  </div>
</template>

<script>
import TodoItem from "@/components/todo/todoItem/TodoItem";
export default {
  name: "TodoList",
  components: {TodoItem},
  props:{
    todoList: {
      type: Array,
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list{
  padding: 0.75rem 0.75rem;
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  flex-direction: column;
}
</style>