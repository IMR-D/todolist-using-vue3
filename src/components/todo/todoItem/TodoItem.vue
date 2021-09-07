<template>
  <div class="todo-item">
    <article>
      <h3>{{index}}: {{todo.title}}</h3>
      <details>
        <summary>Description:</summary>
        <p>{{todo.content}}</p>
      </details>
    </article>
    <AppBtn>Done</AppBtn>
    <AppBtn>Remove</AppBtn>
  </div>
</template>

<script>
import AppBtn from "@/components/ui-kit/AppBtn";
export default {
  name: "todoItem",
  components: {AppBtn},
  props:{
    index:{
      type: Number,
    },
    todo:{
      type: Object,
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-item{
  padding: 0.75rem;
  margin: 1rem 1rem ;
  border: 1px solid white;
  border-radius: 10%;
}
</style>
