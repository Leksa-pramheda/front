<template>
<div>
  <li
    v-for="todoItem in todoList"
    :key="todoItem.id"
    class="todo-item"
    :class="{ done: todoItem.isCompleted }"
  >
    <div class="title">
      {{ todoItem.title }}
    </div>
    <div class="actions">
      <input
        type="checkbox"
        class="checkbox"
        :checked="todoItem.isCompleted"
        @input="onCheckBoxInput(todoItem.id, todoItem.isCompleted)"
      />
      <!-- v-model="todoItem.isCompleted" -->
      <button @click="onDeleteButton(todoItem.id)" class="del-btn">X</button>
    </div>
  </li>
  </div>
</template>

<script>
import { fetchTodoList, patchTodo, deleteTodo } from "@/netClient/todoService";

export default {
  name: "TodoItem",
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

    async onCheckBoxInput(id, isCompleted) {
      try {
        await patchTodo({ id, isCompleted: !isCompleted });
        this.fetchTodoList(); //todo fix this
      } catch (error) {
        console.error({ error });
      }
    },

    async onDeleteButton(id) {
      try {
        await deleteTodo({ id });
        this.fetchTodoList(); //todo fix this
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
