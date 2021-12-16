<template>
  <div class="home-page">
    <CreateTodo @todo-created="onTodoCreated" />
    <h1>todo list</h1>
    <!-- <pre>
        {{todoList}}
        </pre> -->
    <ul class="todo-list">

        <TodoItem/>
    </ul>
  </div>
</template>

<script>
import CreateTodo from "@/components/CreateTodo";
import TodoItem from "@/components/TodoItem";

export default {
  name: "HomePage",
  components:{
    CreateTodo,
    TodoItem
  },
  created() {
    this.fetchTodoList();
  },

};
</script>

<style scoped></style>
