<template>
  <div class="home-page">
    <CreateTodo @todo-created="onTodoCreated" />
    <h1>todo list</h1>
    <!-- <pre>
        {{todoList}}
        </pre> -->
    <ul class="todo-list">
      <div v-for="todoItem in todoList" :key="todoItem.id">
        <TodoItem
          :todo="todoItem"
          @todo-deleted="fetchTodoList"
          @todo-done="fetchTodoList"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import CreateTodo from "@/components/CreateTodo";
import TodoItem from "@/components/TodoItem";

import { fetchTodoList } from "@/netClient/todoService";

export default {
  name: "HomePage",
  components: {
    CreateTodo,
    TodoItem,
  },
  created() {
    this.fetchTodoList();
  },

  data: () => ({
    todoName: "",
    todoList: [],
  }),
  methods: {
    onTodoCreated(createdTodo) {
      this.todoList.unshift(createdTodo);
    },

    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>

<style scoped></style>
