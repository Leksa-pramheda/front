<template>
  <div class="home-page">
    <section class="create-todo">Add todo</section>
    
    <section class="todo-list">
      <h1>todo list</h1>
      <!-- <pre>
        {{todoList}}
        </pre> -->
        
      <ul>
        <li v-for="todoItem in todoList" :key="todoItem.id">
        <div class="title">
          {{todoItem.title}}
        </div>
        <div class="checkbox">
          <input type="checkbox" :checked="todoItem.isCompleted">
        </div>        
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { fetchTodoList } from "@/netClient/todoService";
export default {
  name: "HomePage",
data: () => ({
  todoList: [],
}),
  async mounted() {
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // console.warn({response});
  },
  methods: {
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
