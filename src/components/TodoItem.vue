<template>
  <div>
    <li class="todo-item" :class="{ done: todo.isCompleted }">
      <div class="title">
        {{ todo.title }}
      </div>
      <div class="actions">
        <input
          type="checkbox"
          class="checkbox"
          :checked="todo.isCompleted"
          @input="onCheckBoxInput(todo.id, todo.isCompleted)"
        />
        <!-- v-model="todo.isCompleted" -->
        <button @click="onDeleteButton(todo.id)" class="del-btn">X</button>
      </div>
    </li>
  </div>
</template>

<script>
import { fetchTodoList, patchTodo, deleteTodo } from "@/netClient/todoService";

export default {
  name: "TodoItem",
  data: () => ({
    // todoName: "",
    todoList: [],
  }),
  props: ["todo"],
  methods: {
    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
      } catch (error) {
        console.error({ error });
      }
    },

    async onCheckBoxInput(id, isCompleted) {
      try {
        await patchTodo({ id, isCompleted: !isCompleted });
        const ToDoList = this.fetchTodoList();
        this.$emit("todo-done", ToDoList);
      } catch (error) {
        console.error({ error });
      }
    },

    async onDeleteButton(id) {
      try {
        await deleteTodo({ id });
        const ToDoList = this.fetchTodoList();
        this.$emit("todo-deleted", ToDoList);
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
